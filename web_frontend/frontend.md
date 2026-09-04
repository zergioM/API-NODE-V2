# Sistema Gestion Academica
## Crear la estructura del proyecto
 
│   App.css
│   App.tsx
│   index.css
│   main.tsx
│
├───assets
│       hero.png
│       react.svg
│       vite.svg
│
├───components
├───context
├───hooks
├───layouts
├───pages
│   ├───Cursos
│   ├───Dashboard
│   ├───Docentes
│   ├───Estudiantes
│   ├───Login
│   ├───Sedes
│   └───Usuarios
├───routes
├───services
├───styles
└───utils

Arquitectura General
 Cliente React + vite -> Axios Cookies HttpOnly -> Express API
 -> Routes -> Middlewares -> Controllers -> Services -> Repositories
 -> Sequelize ORM -> MySQL