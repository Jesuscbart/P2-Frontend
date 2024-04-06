import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Pokemon } from "../../types.ts";

import Pokemon_Item from "../../islands/Pokemon_Item.tsx";

// Creo un handler con un método GET que recibe un Request y un FreshContext con un parámetro de tipo Character
export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Pokemon>) {
    try {
      const { name } = ctx.params;
      const pokemon_req = await Axios.get<Pokemon[]>(`https://lospoquimones.deno.dev/${name}`);

      if (pokemon_req.status !== 200) {  // Si no se encuentra el personaje, devuelvo un error
        throw new Error("No se ha encontrado el pokemon ${name}");
      }

      const pokemon = pokemon_req.data[0];  // Obtengo el personaje de los datos


      return ctx.render(pokemon);
    } catch (e) {
      console.error(e);
      throw new Error("Ha habido un error");
    }
  },
};

// Creo un componente Page que recibe un parámetro de tipo PageProps con un parámetro de tipo Character
export default function Page(props: PageProps<Pokemon>) {
  
  const pokemon = props.data;   // Obtengo el personaje de los datos

  try {

    return (                        // Devuelvo el renderizado de la página con los datos del personaje
      
      <>
       <Pokemon_Item _id={pokemon._id} name={pokemon.name} image={pokemon.image} sound={pokemon.sound}/>                                     
      </>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}