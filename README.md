# Proyecto YOLO + Frontend + Backend

Este repositorio contiene un proyecto completo que incluye:

- Un **frontend** hecho con React (Vite).
- Un **backend** (Node/Express u otro según tu estructura).
- Archivos principales del proyecto como `.gitignore` y `README.md`.

Además, este README funciona como **manual de usuario** con los comandos exactos utilizados para subir el proyecto a GitHub.

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

## 📦 Frontend (React + Vite)

### Instalar dependencias

```sh
cd frontend
npm install
```

### Ejecutar el servidor de desarrollo

```sh
npm run dev
```

---

## 🖥 Backend

(Dependiendo de tu backend, normalmente:)

### Instalar dependencias

```sh
cd backend
npm install
```

### Ejecutar el servidor

```sh
npm start
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






