from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
from pathlib import Path
from PIL import Image
import shutil
import traceback
import numpy as np

app = FastAPI(title="API de detección de fisuras con YOLO")

# Permitir CORS para tu frontend
origins = ["http://localhost:5173", "http://127.0.0.1:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar modelo desde ruta absoluta
model_path = Path(__file__).parent / "best.pt"
if not model_path.exists():
    raise FileNotFoundError(f"No se encontró el modelo en {model_path}")
model = YOLO(str(model_path))

# Carpeta para resultados
RESULTS_DIR = Path(__file__).parent / "results"
OUTPUT_DIR = RESULTS_DIR / "detect_output"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Extensiones válidas
VALID_IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp"}

def is_image(filename: str) -> bool:
    return Path(filename).suffix.lower() in VALID_IMAGE_EXTENSIONS

@app.get("/")
async def root():
    return {"message": "API de detección de fisuras con YOLO"}

@app.post("/detect/")
async def detect(file: UploadFile = File(...)):
    try:
        if not is_image(file.filename):
            raise HTTPException(status_code=400, detail="Archivo no es una imagen válida.")

        temp_path = RESULTS_DIR / file.filename
        with open(temp_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Validar imagen
        try:
            Image.open(temp_path).verify()
        except Exception:
            temp_path.unlink()
            raise HTTPException(status_code=400, detail="Archivo no es una imagen válida.")

        # Detección YOLO
        results = model(str(temp_path))

        # Obtener imagen anotada como numpy array
        annotated_image = results[0].plot()
        pil_image = Image.fromarray(annotated_image)

        # Guardar imagen detectada
        detected_file = OUTPUT_DIR / f"detected_{file.filename}"
        pil_image.save(detected_file)

        return FileResponse(
            path=detected_file,
            media_type="image/png",
            filename=detected_file.name
        )

    except Exception as e:
        # Imprimir stack trace en la consola de uvicorn
        print("ERROR EN DETECCIÓN:")
        print(traceback.format_exc())
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/results/clear")
async def clear_results():
    for file in OUTPUT_DIR.iterdir():
        if file.is_file():
            file.unlink()
    return {"message": "Todos los resultados han sido eliminados."}
