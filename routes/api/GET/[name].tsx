import { FreshContext, Handlers } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Pokemon } from "../../../types.ts";

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown>) => { // Se define un handler GET
        try {
            const {name} = ctx.params;  // Se obtiene el nombre del pokémon a buscar
            const pokemon = await Axios.get<Pokemon[]>(`https://lospoquimones.deno.dev/${name}`);   // Se envía una petición GET al servidor con el nombre del pokémon a buscar

            if (pokemon.status !== 200) {
                throw new Error(`No se pudo obtener el pokemon ${name} de la API`); // Si la respuesta no es 200 (OK) se muestra un mensaje de error
            }

            const pokemonData: Pokemon[] = pokemon.data;    // Se obtiene la respuesta del servidor

            return new Response(JSON.stringify(pokemonData), {  // Se devuelve la respuesta del servidor
                headers: {  // Se establece la cabecera de la respuesta
                    "content-type": "application/json", 
                },
            });
        
        } catch (error) {   // Si ha habido un error se muestra un mensaje de error
            console.error(error);
            throw new Error(error.message);
        }
    }
};