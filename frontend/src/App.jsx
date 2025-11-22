import { useState } from "react";
import DetectButton from "./components/DetectButton";
import ResetButton from "./components/ResetButton";
import DeleteButton from "./components/DeleteButton";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [detectedImage, setDetectedImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Selecciona una imagen primero");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/detect/", {
        method: "POST",
        body: formData,
        mode: "cors",
      });

      if (!response.ok) {
        const errMsg = await response.json().catch(() => ({}));
        throw new Error(errMsg.detail || "Error al procesar la imagen");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setDetectedImage(imageUrl);

      setResults((prev) => [...prev, imageUrl]);
    } catch (err) {
      console.error(err);
      alert(`Ocurrió un error al detectar fisuras: ${err.message}`);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setDetectedImage(null);
  };

  const handleClearResults = async () => {
    try {
      const response = await fetch("http://localhost:8000/results/clear", {
        method: "DELETE",
      });
      if (response.ok) {
        setResults([]);
        setDetectedImage(null);
        setSelectedFile(null);
        alert("Resultados eliminados correctamente");
      } else {
        throw new Error("No se pudo limpiar los resultados");
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-red-950 to-black flex justify-center items-start pt-16 px-4 relative overflow-hidden">
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-5xl flex flex-col items-center gap-12 relative z-10">

        {/* Título con animación */}
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-red-600 via-red-500 to-red-700 text-center animate-fade-in drop-shadow-2xl mb-6">
          Detección de Fisuras con YOLO
        </h1>

        {/* Botones fuera del contenedor */}
        <div className="flex gap-4 flex-wrap justify-center items-center mb-8">
          <DetectButton onClick={handleUpload} />
          <ResetButton onClick={handleReset} />
          <DeleteButton onClick={handleClearResults} />
        </div>

        {/* Contenedor principal con efecto glassmorphism */}
        <div className="w-full bg-linear-to-br from-gray-800/40 via-gray-900/40 to-black/40 backdrop-blur-xl shadow-2xl rounded-3xl p-10 flex flex-col gap-12 border border-red-900/30 animate-slide-up">

          {/* Selector de archivo centrado */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md group">
              <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-red-800 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="relative border-2 border-red-800/60 p-5 rounded-2xl bg-gray-900/80 shadow-2xl w-full text-gray-200 placeholder-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-600/40 transition-all duration-300 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:bg-linear-to-r file:from-red-600 file:to-red-700 file:text-white file:font-semibold file:cursor-pointer file:shadow-lg hover:file:from-red-700 hover:file:to-red-800 hover:file:scale-105 file:transition-all file:duration-300"
              />
            </div>
          </div>

          {/* Imágenes cargada y detectada centradas con buen espacio */}
          <div className="flex flex-wrap justify-center gap-10">

            {selectedFile && (
              <div className="flex flex-col items-center gap-3 animate-fade-in">
                <p className="text-red-400 font-semibold text-lg">Imagen cargada:</p>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-red-800 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Original"
                    className="relative w-72 h-72 object-contain bg-gray-900 border-2 border-red-800/50 rounded-2xl shadow-2xl p-2"
                  />
                </div>
              </div>
            )}

            {detectedImage && (
              <div className="flex flex-col items-center gap-3 animate-fade-in">
                <p className="text-red-400 font-semibold text-lg">Resultado YOLO:</p>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-red-500 to-red-700 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                  <img
                    src={detectedImage}
                    alt="Detectada"
                    className="relative w-72 h-72 object-contain bg-gray-900 border-2 border-red-600 rounded-2xl shadow-2xl p-2"
                  />
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Resultados anteriores - Sin contenedor */}
        <div className="w-full animate-fade-in">
          <h2 className="text-4xl font-black mb-8 text-transparent bg-clip-text bg-linear-to-r from-red-400 to-red-600 text-center drop-shadow-lg">
            Resultados anteriores
          </h2>

          {results.length === 0 ? (
            <p className="text-center text-gray-400 text-xl py-8">
              Aún no hay resultados.
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-6">
              {results.map((res, idx) => (
                <div key={idx} className="relative group animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-red-800 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
                  <img
                    src={res}
                    alt={`Resultado ${idx}`}
                    className="relative w-full h-36 object-contain bg-gray-900 border border-red-800/50 rounded-xl shadow-xl p-2 transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
