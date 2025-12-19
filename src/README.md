## Descripción del proyecto

Este proyecto consiste en una aplicación web desarrollada con React que se comunica con un backend simulado usando JSON Server.
La aplicación permite:

Listar posts desde una API REST local

Ver el detalle de cada post

Crear nuevos posts mediante un formulario

Navegar entre vistas usando React Router

Consumir endpoints usando Axios

Implementar paginación y validaciones en formularios

El objetivo principal es reforzar el uso de endpoints REST, la comunicación frontend-backend y buenas prácticas en React.

## ¿Qué es CORS?

CORS es un mecanismo de seguridad del navegador que restringe las solicitudes HTTP entre distintos orígenes (por ejemplo, frontend en localhost:5173 y backend en localhost:3000).

Si no se gestiona correctamente, el navegador bloquea las peticiones por seguridad.

¿Cómo se solventó CORS en clase?

En esta práctica se utilizó JSON Server, el cual permite solicitudes desde otros orígenes sin necesidad de configuración adicional compleja.

Además, el uso de Axios facilita el manejo de peticiones HTTP y errores, permitiendo una comunicación clara entre el frontend y el backend local.
