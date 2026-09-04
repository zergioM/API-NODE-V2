# Arquitectura Frontend
```mermaid
graph TD
App --> Router
Router --> Pages
Pages --> Components
Components --> Hooks
Hooks --> Context
Context --> Services
Services --> Axios
Axios --> Backend 
```