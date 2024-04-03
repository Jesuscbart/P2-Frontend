### Author: Jesús Cuesta Bartolomé
### Date: 2024/04/05

# API Endpoints

### GET `/`

- Returns a list of all Pokémon in the database.

### GET `/:name`

- Returns Pokémon matching the provided name.

### POST `/`

- Adds a new Pokémon to the database.
- Requires `name`, `image`, `sound`, and `creator` fields in the request body.
- Supported image formats: jpg, jpeg, png.
- Supported audio format: mp3.

### DELETE `/:name`

- Deletes a Pokémon from the database.
- Requires the `name` and `creator` fields in the request body.

## Example Usage

### Fetch all Pokémon

curl http://localhost:8000/

### Fetch pokemon by name

curl http://localhost:8000/pikachu

### Add a new Pokémon

curl -X POST -H "Content-Type: application/json" -d '{"name":"Charizard","image":"charizard.jpg","sound":"charizard.mp3","creator":"Ash"}' http://localhost:3000/

### Delete a Pokémon

curl -X DELETE -H "Content-Type: application/json" -d '{"creator":"Ash"}' http://localhost:3000/charizard



# Enunicado de la práctica

En esta práctica deberéis realizar una página web con función de pokedex básica interactiva.
(Si no sabéis que es una pokedex tenéis cosas mas importantess de las que preocuparos)

[lospoquimones.deno.dev](https://lospoquimones.deno.dev/)    

Con este api (del cuál podéis ver su documentación en https://github.com/YBlas/PokemonAPI ) podréis acceder a un listado de todos los pokemones, un pokemon en particular y añadir un nuevo pokemon.

Utilizando esta API se pide hacer una página web con las siguientes funciones.

- Página principal en la que se muestren todos los pokemones. 
    - Hacer un componente principal en el que envolver el resto de elementos de la página
    - Crear un componente pokemon genérico para mostrar cada pokemon -> Cada pokemon dispone de una imagen, sonido y nombre. En el componente se deberá de poder ver la imagen, leer el nombre y reproducir el sonido.
    - La imagen y el sonido siempre serán una url a un archivo usable por el navegador.
    - Desde el mismo componente se deberá poder acceder a la opción de eliminar el personaje, con un modal o una nueva página, el modal dará mas nota. -> Para eliminar el pokemon habrá que añadir el creator como método de autenticación.

- Página única por cada pokemon

- Página de búsqueda de pokemones

- Página de creación de pokemon
    
    - Cada pokemon tendrá un formulario en el cuál, además de los datos recibidos regularmente se añadirá el string creator, para que solo el mismo creador pueda eliminarlo.
    
    - La imagen y el sonido deben de ser todos reales, su incorrecto funcionamiento afectará a la nota de su creador (todos debéis de crear al menos uno), os recomiendo utilizar un servicio como https://catbox.moe/ para subir los archivos y añadir los url al API

*El uso de CSS de forma debida para dar valor a la experiencia de uso de la página contará gravemente en la valoración de la práctica*

---

La práctica será desarrollada en el framework Fresh.

La página web se tendrá que desplegar en Deno deploy. En la entrega tendré que ver una url a visitar y un link al repositorio de GitHub donde hayáis subido el código con su respectiva release.

Más avisos para caminantes, antes de ver nada de vuestro código abriré la página en mi navegador de confianza (el cuál no es netscape, tranquilos).

La primera visualización gráfica afectará gravemente a mi opinión sobre el código que leeré Y EJECUTARÉ LOCALMENTE posteriormente.


---
### Anotaciones varias

1. Crear un Component Menu
2. Crear un Component Footer
3. Crear un layout en routes con el Component Menu y el Component Footer
4. Crear una ruta index con todos los pokemones de la API
5. Crear carpeta pokemon con [name].tsx para poder buscar un pokemon en concreto
6. Crear búsqueda pokemon como en el video 11 que se vaya actualizando con cada caracter que se escribe