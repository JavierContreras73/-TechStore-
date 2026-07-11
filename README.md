# TechStore Chile - Tienda Virtual Full-Stack

Este proyecto consiste en una plataforma de comercio electrónico para **TechStore Chile**, desarrollada bajo una arquitectura Full-Stack desacoplada utilizando React para el Frontend y Node.js/Express con MongoDB para el Backend.

## Tecnologías Utilizadas

*   **Frontend:** React, Vite, JavaScript (ES6+), CSS3.
*   **Backend:** Node.js, Express.js, Cors.
*   **Base de Datos:** MongoDB, Mongoose (ODM).

---

## Estructura del Proyecto

*   `/` (Raíz): Configuración y código fuente del Frontend en React (Vite).
*   `/backend`: Servidor API Rest en Node.js y script de automatización de base de datos.

---

## Instrucciones de Instalación y Ejecución

Para levantar el proyecto completo de manera local, sigue los pasos a continuación:

### 1. Requisitos Previos
*   Tener instalado [Node.js](https://nodejs.org/)
*   Tener instanciado y corriendo [MongoDB Local / MongoDB Compass](https://www.mongodb.com/products/tools/compass) en `mongodb://localhost:27017`

### 2. Configurar y Levantar el Backend
Abre una terminal en la raíz del proyecto y ejecuta:
```bash
cd techstore/backend
npm install
npm start
