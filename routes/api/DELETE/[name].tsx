import { FreshContext, Handlers } from "$fresh/server.ts";
import { Pokemon } from "../../../types.ts";

export const handler: Handlers = {
    DELETE: async (req: Request, ctx: FreshContext) => {
        try {
            const {name} = ctx.params;
            const body = await req.json();

            const pokemon = await fetch(`https://lospoquimones.deno.dev/${name}`, {
                method: 'DELETE',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
                
            });

            if (pokemon.status === 404){ // 404 = Not Found
                throw new Error(`No se pudo eliminar el pokemon ${name}`);
            }

            if (pokemon.status === 204){
                return new Response(JSON.stringify(`Pokemon ${name} eliminado`), {
                    headers: {
                        "content-type": "application/json",
                    },
                });
            }
        }
        catch (error) {
            console.error(error);
            throw new Response(JSON.stringify(error.message), {status: 500});
        }
    }
};