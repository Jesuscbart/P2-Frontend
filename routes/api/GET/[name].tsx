import { FreshContext, Handlers } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Pokemon } from "../../../types.ts";

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown>) => {
        try {
            const {name} = ctx.params;
            const pokemon = await Axios.get<Pokemon[]>(`https://lospoquimones.deno.dev/${name}`);

            if (pokemon.status !== 200) {
                throw new Error(`No se pudo obtener el pokemon ${name} de la API`);
            }

            const pokemonData: Pokemon[] = pokemon.data;

            return new Response(JSON.stringify(pokemonData), {
                headers: {
                    "content-type": "application/json",
                },
            });
        
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
};