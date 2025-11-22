# Manual de Uso del Proyecto de Detección de Fisuras (YOLO + FastAPI + React)

Este repositorio contiene un proyecto completo que incluye:

- Un **frontend** hecho con React (Vite).
- Un **backend** construido con FastAPI y modelo YOLO.
- Archivos principales del proyecto como `.gitignore` y `README.md`.

Este README funciona como **manual de usuario** con los comandos exactos para instalar, ejecutar y subir el proyecto a GitHub.

---

## 📁 Estructura del Proyecto

```
proyecto_yolo/
│── backend/
│── frontend/
│── .gitignore
│── README.md
│── package-lock.json
```

---

## 🚀 Instalación y Ejecución del Proyecto

### 1. Clonación del Repositorio

```sh
git clone https://github.com/WILL050305/deeplearning.git
cd deeplearning
```

---

## 🖥 Backend (FastAPI + YOLO)

### 2. Acceder al directorio del backend

```sh
cd backend
```

### 3. Crear un entorno virtual

```sh
python -m venv venv
```

### 4. Activar el entorno virtual

**Windows**

```sh
venv\Scripts\activate
```

**Linux / macOS**

```sh
source venv/bin/activate
```

### 5. Instalar dependencias

```sh
pip install -r requirements.txt
```

### 6. Ejecutar el servidor FastAPI

```sh
uvicorn main:app --reload
```

El backend estará disponible en:

```
http://127.0.0.1:8000
```

---

## 📦 Frontend (React)

### 7. Acceder al directorio del frontend

```sh
cd ../frontend
```

### 8. Instalar dependencias

```sh
npm install
```

### 9. Ejecutar el servidor de desarrollo

```sh
npm run dev
```

El frontend estará disponible en:

```
http://localhost:5173
```

---

## ✅ Proyecto en Ejecución

- **Frontend:** http://localhost:5173
- **Backend:** http://127.0.0.1:8000

---

# 🚀 Manual de Usuario – Subir a GitHub Paso a Paso

### 1️⃣ **Inicializar Git en la carpeta del proyecto**

Abre PowerShell dentro de la carpeta del proyecto:

```sh
PS C:\Users\PC\Documents\proyecto_yolo> git init
```

### 2️⃣ Agregar los archivos al repositorio

```sh
git add .
```

Es normal que aparezcan advertencias como:
```
LF will be replaced by CRLF
```
No afectan al funcionamiento.

### 3️⃣ Hacer el primer commit

```sh
git commit -m "Primer commit - Subiendo proyecto YOLO completo"
```

### 4️⃣ Conectar con el repositorio remoto

Tu repositorio remoto es:

👉 https://github.com/WILL050305/deeplearning.git

Ejecuta:

```sh
git remote add origin https://github.com/WILL050305/deeplearning.git
```

### 5️⃣ Subir el proyecto a GitHub

```sh
git branch -M main
git push -u origin main
```

Si Git pide login, debes iniciar sesión con un token personal, no con contraseña.

---

## 🛠 Comandos útiles adicionales

### Ver el estado del repositorio

```sh
git status
```

### Ver cambios realizados

```sh
git log
```

### Subir cambios nuevos después del primer push

```sh
git add .
git commit -m "Actualización"
git push
```

---

## 🧠 Notas importantes

- Los warnings de CRLF no afectan en Windows.

- Si Git dice que no es un repositorio:
  ➜ Asegúrate de ejecutar `git init` en la carpeta correcta.

- Si falló el push:
  ➜ Revisa si configuraste el origin correctamente.

---

## ✔ Proyecto listo

Si seguiste estos pasos, tu proyecto ya debe estar visible en:

👉 https://github.com/WILL050305/deeplearning



