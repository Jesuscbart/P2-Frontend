import Axios from "npm:axios";
import { FreshContext, Handlers } from "$fresh/server.ts";
import { Pokemon } from "../../../types.ts";

export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext) => {
        try {
            const body = await req.json();
            const pokemon = await Axios.post<Pokemon>(`https://lospoquimones.deno.dev/`, body);

            if (pokemon.status !== 201) {
                throw new Error("No se pudo agregar el pokemon");
            }

            const pokemonData: Pokemon = pokemon.data;

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