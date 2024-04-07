import { FreshContext, Handlers } from "$fresh/server.ts";
import { Pokemon } from "../../../types.ts";

export const handler: Handlers = {
    DELETE: async (req: Request, ctx: FreshContext) => {
        try {
            const {name} = ctx.params;  // Se obtiene el nombre del pokémon a eliminar
            const body = await req.json();  // Se obtiene el cuerpo de la petición

            const pokemon = await fetch(`https://lospoquimones.deno.dev/${name}`, { // Se envía una petición DELETE al servidor con el nombre del pokémon a eliminar
                method: 'DELETE',               // Se envía el cuerpo de la petición
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (pokemon.status === 404){ // 404 = Not Found
                throw new Error(`No se pudo eliminar el pokemon ${name}`);
            }

            if (pokemon.status === 204){   // 204 = No Content
                return new Response(JSON.stringify(`Pokemon ${name} eliminado`), {  // Si todo ha ido bien se devuelve un mensaje de éxito
                    headers: {
                        "content-type": "application/json",
                    },
                });
            }
        }
        catch (error) { // Si ha habido un error se muestra un mensaje de error
            console.error(error);
            throw new Response(JSON.stringify(error.message), {status: 500});
        }
    }
};