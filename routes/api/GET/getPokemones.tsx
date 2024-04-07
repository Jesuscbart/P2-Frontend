import Axios from "npm:axios";
import { Handlers } from "$fresh/server.ts";
import {Pokemon} from "../../../types.ts";

export const handler: Handlers = {  // Handler con GET para obtener todos los pokemones de la API

    GET: async () => {
        try {
            const pokemones = await Axios.get<Pokemon[]>(`https://lospoquimones.deno.dev/`);    // Guardo en la variable pokemones la respuesta de la API, que es un array de objetos de tipo Pokemon

            if (pokemones.status !== 200) {  // Si el status de la respuesta no es 200 (OK), lanzo un error
                throw new Error("No se pudo obtener los pokemones de la API");
            }
            const pokemonesData:Pokemon[] = pokemones.data; // Guardo en la variable pokemonesData el array de objetos de tipo Pokemon

            return new Response(JSON.stringify(pokemonesData), {    // Convierto el valor de pokemonesData en un string JSON
                headers: {                                          // Devuelvo una respuesta con el string JSON y el header "content-type" con valor "application/json" para indicar que el contenido es JSON
                    "content-type": "application/json",
                },
            });

        } catch (error) {
            console.error(error);    // Si hay un error, lo muestro en la consola del navegador
            throw new Error(error.message)
            
        }
    }
}