# Arquitectura Backend
```mermaid
graph TD
Routes --> Controllers
Controllers --> Services
Services --> Repositories
Repositories --> Models
Models --> MySQL
Controllers --> Validators
Controllers --> Middlewares 
```