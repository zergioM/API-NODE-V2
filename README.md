# 🎓 API Educativa LMS

![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![Express](https://img.shields.io/badge/Express-5.x-black)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.x-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

API REST profesional desarrollada con **Node.js**, **Express** y **Sequelize** para la gestión de instituciones educativas.

El proyecto implementa una arquitectura escalable basada en buenas prácticas de desarrollo Backend, utilizando:

- Repository Pattern
- Service Layer
- Controllers
- Middlewares
- Validaciones
- JWT Authentication
- Cookies HttpOnly
- Roles y permisos
- Arquitectura Multiinstitución

---

# 🚀 Características

## Seguridad

- JWT Authentication
- Cookies HttpOnly
- Helmet
- CORS
- Rate Limit
- Password Hash (bcrypt)
- Middleware de autenticación
- Middleware de autorización por roles

---

## Arquitectura

```
src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── validators/
├── seeders/
└── server.js
```

Arquitectura basada en capas:

```
Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
Models (Sequelize)
```

---

# 📚 Tecnologías

- Node.js
- Express 5
- Sequelize ORM
- MySQL
- JWT
- Cookie Parser
- Express Validator
- Helmet
- Morgan
- dotenv
- bcryptjs

---

# 📦 Instalación

## Clonar repositorio

```bash
git clone 
```

Entrar al proyecto

```bash
cd api_nodeV2
```

Instalar dependencias

```bash
npm install
```

---

# ⚙ Variables de entorno

Crear un archivo:

```
.env
```

Ejemplo:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=api_educativa
DB_USER=root
DB_PASSWORD=

JWT_SECRET=TuClaveSuperSegura
```

---

# ▶ Ejecutar proyecto

Modo producción

```bash
npm start
```

Modo desarrollo

```bash
nodemon src/server.js
```

---

# Base de datos

Actualmente soporta:

- MySQL
- PostgreSQL (configurable mediante Sequelize)

---

# Modelo del sistema

```
Institución
      │
      ├── Sedes
      │
      ├── Usuarios
      │      │
      │      ├── Docentes
      │      └── Estudiantes
      │
      ├── Cursos
      │
      └── Matrículas
```

---

# Roles

Actualmente el sistema soporta:

- SUPER_ADMIN
- ADMIN
- DOCENTE
- ESTUDIANTE

Los permisos son controlados mediante middleware.

---

# Autenticación

El sistema utiliza:

- JWT
- Cookies HttpOnly

Login

```
POST /api/auth/login
```

Perfil

```
GET /api/auth/perfil
```

Logout

```
POST /api/auth/logout
```

---

# Módulos implementados

## Autenticación

- Registro
- Login
- Perfil
- Logout

---

## Usuarios

- Crear
- Listar
- Actualizar
- Desactivar (Soft Delete)

---

## Instituciones

CRUD completo

---

## Sedes

CRUD completo

---

## Docentes

CRUD completo

---

## Estudiantes

CRUD completo

---

## Cursos

CRUD completo

---

## Matrículas

- Matricular estudiantes
- Relación Curso ↔ Estudiante

---

# Respuestas estándar

Todas las respuestas siguen el formato:

```json
{
    "ok": true,
    "message": "Operación realizada correctamente",
    "data": {}
}
```

Errores:

```json
{
    "ok": false,
    "error": "Mensaje de error"
}
```

---

# Seguridad implementada

- Helmet
- JWT
- Cookies HttpOnly
- Rate Limit
- Password Hash
- Roles
- Validaciones
- Soft Delete
- Middleware Global

---

# Arquitectura Repository Pattern

Ejemplo del flujo:

```
POST /usuarios

↓

Route

↓

Controller

↓

Service

↓

Repository

↓

Sequelize
```

---

# Próximas funcionalidades

## Gestión Académica

- Materias
- Horarios
- Periodos Académicos
- Calificaciones
- Asistencia
- Tareas
- Entrega de tareas
- Exámenes
- Banco de preguntas
- Reportes

---

## Administración

- Swagger
- Logs
- Auditoría
- Dashboard
- Reportes PDF
- Multiempresa
- Configuración por institución

---

# Buenas prácticas implementadas

- Clean Architecture
- Repository Pattern
- Service Pattern
- Validaciones
- Middlewares reutilizables
- Separación de responsabilidades
- Variables de entorno
- Código modular
- Escalable

---

# Scripts

Instalar dependencias

```bash
npm install
```

Ejecutar

```bash
npm start
```

---

# Licencia

MIT License

---

# Autor

**Sergio Martinez Henao**

Estudiante desarrollo de Software

Proyecto desarrollado con fines educativos para la construcción de una API REST profesional orientada a plataformas LMS y sistemas de gestión académica.