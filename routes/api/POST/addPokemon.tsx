import Axios from "npm:axios";
import { FreshContext, Handlers } from "$fresh/server.ts";
import { Pokemon } from "../../../types.ts";

export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext) => {
        try {
            const {name, image, sound, creator} = await req.json();
            const pokemon = {name, image, sound, creator};
            const response = await Axios.post<Pokemon>("https://lospoquimones.deno.dev", pokemon);

            return new Response(JSON.stringify(response.data), {
                headers: {
                    "content-type": "application/json",
                },
            });
        }
        catch (error) {
            console.error(error.response.data.message);
            throw new Response(JSON.stringify(error.message), {status: 500});
        }
    }
};