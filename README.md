
# Aluraflix - Challenge de Alura

Aluraflix es una plataforma diseñada para gestionar vídeos, desarrollada como parte del challenge de Alura "Practicando React: Challenge Aluraflix". Este proyecto te permitirá poner en práctica y reforzar tus conocimientos en React, incluyendo temas como componentización, uso de hooks, consumo de API y manejo de rutas.

## Tecnologías utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **JSON Server**: Simulación de una API REST para el manejo de datos.
- **JavaScript**: Lenguaje principal de desarrollo.
- **CSS**: Estilización de la interfaz.

## Funcionalidades

1. **Listar videos**: Visualiza todos los videos registrados.
2. **Registrar videos**: Agrega nuevos videos con detalles como título y URL.
3. **Actualizar videos**: Edita la información de un video existente.
4. **Eliminar videos**: Borra videos del sistema.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js (v16 o superior)
- npm (v8 o superior) o Yarn

## Instalación y ejecución

1. Clona este repositorio:

   ```bash
   git clone https://github.com/YossecSA/challengeAluraReact.git
   cd challengeAluraReact
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor JSON Server:

   ```bash
   npx json-server --watch src/data/db.json --port 3001
   ```

4. Inicia la aplicación React:

   ```bash
   npm run start
   # o
   yarn start
   ```

5. Abre tu navegador y accede a [http://localhost:5173](http://localhost:5173) para interactuar con la plataforma.

## Estructura del proyecto

```
src/
├── components/        # Componentes reutilizables
├── data/              # Base de datos simulada (db.json)
├── pages/             # Paginas del sistema
├── utils/             # Funciones para reutilizar
├── api/                # Funciones para consumir la API

```

## Base de datos simulada

La base de datos simulada se encuentra en el archivo `src/data/db.json`. Puedes modificar este archivo para agregar, editar o eliminar datos de prueba. Un ejemplo del formato de datos es el siguiente:

```json
{
  "videos": [
    {
      "id": 1,
      "titulo": "Video de ejemplo",
      "url": "https://www.youtube.com/watch?v=ejemplo",
      "categoria": "Programación"
    }
  ]
}
```

## Rutas principales

- `/` : Página principal que lista los videos.
- `/subirvideo` : Página para registrar un nuevo video.
- `/` : Modal para editar un video existente.

## Aprendizajes clave

Este proyecto permite practicar los siguientes conceptos de React:

- Componentización y reutilización de componentes.
- Manejo de estado con hooks como `useState` y `useEffect`.
- Consumo de API REST utilizando `fetch` o bibliotecas como `axios`.
- Implementación de rutas con `react-router-dom`.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por explorar Aluraflix! Si tienes dudas o sugerencias, no dudes en comunicarte.

