import Axios from "npm:axios";
import { FreshContext, Handlers } from "$fresh/server.ts";
import { Pokemon } from "../../../types.ts";

export const handler: Handlers = {  // Handler con POST para añadir un pokémon a la API
    POST: async (req: Request, ctx: FreshContext) => {  // Se define un handler POST
        try {
            const {name, image, sound, creator} = await req.json(); // Se obtienen los datos del nuevo pokémon del cuerpo de la petición
            const pokemon = {name, image, sound, creator};  // Se guarda en la variable pokemon un objeto con los datos del nuevo pokémon
            const response = await Axios.post<Pokemon>("https://lospoquimones.deno.dev", pokemon);  // Se envía una petición POST al servidor con los datos del nuevo pokémon

            return new Response(JSON.stringify(response.data), {    // Se devuelve la respuesta del servidor
                headers: {  // Se establece la cabecera de la respuesta
                    "content-type": "application/json",
                },
            });
        }
        catch (error) { // Si ha habido un error se muestra un mensaje de error
            console.error(error.response.data.message);
            throw new Response(JSON.stringify(error.message), {status: 500});
        }
    }
};