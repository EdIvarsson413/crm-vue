# Sobre el proyecto

Proyecto de Frontend de CRM de clientes, registro y edición de datos. Hecho enconjunto en el curso [Vue.js 3 - La Guía Completa](https://www.udemy.com/course/vuejs-la-guia-completa-composition-pinia-mevn-creando-proyectos-reales/).

## Aprendiendo sobre: 
+ La implementación de páginas con Vue Router.
    - Agregar una página al router.
    - Agregar la página 404 cuando no existe una ruta establecida.
    - Buenas prácticas para la generación de páginas.
- Introducción a las REST API's usando JSON Server.
- Utilización de librerias para facilitar el uso de formularios (FormKit).
- Buenas prácticas para escribir peticiones a una API.

### Notas
> Sobre useRoute y useRouter.

- useRoute 

Contendra información de la ruta actual
Obtener el name, un parametro, path, query (?)

- useRouter

Tiene relacion con el routing en general,
redireccionamiento, si una ruta existe, volver a la anterior.

> Diferencias entre PUT y PATCH

- PUT: Modifica todo el recurso

- PATCH: Realiza modificaciones parciales a un recurso
```js

                    /* Ejemplo */

// Cuando se realiza un nuevo registro con POST
const registroNuevo = {
    nombre: 'Raúl'
    apellido: 'Menendez'
}

// Pero en su edicion está
const registroActualizado = {
    nombre: 'Juan',
    apellido: 'Menendez',
    registradoEditado: Data.now() 
}
```

Patch solo cambiará los campos que fueron actualizados y se evita la pérdida de información

> Sobre JSON Server

De haber un archivo db.json para que JSON Server trabaje sobre ese archivo con este json inicial: 
```json
{
    "clientes": []
}
```

Después ejecutar el comando:
```
    json-server --watch db.json --port [Puerto de tu elección]
```

## Vue 3 + Vite + Vue Router

Este proyeto implementa el router de Vue para la navegación de páginas. Utilizando las ultimas versiones de Vite, Vue & Vue Router.

### Configuración del IDE

Recomendaciones:
- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).