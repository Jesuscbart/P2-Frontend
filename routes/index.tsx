

import Axios from "npm:axios"; //Semejante a Fetch
import { Pokemon } from "../types.ts"; //Importo el tipo Pokemon
import PokemonComponent from "../components/PokemonComponent.tsx"; //Importo el componente PokemonComponent
import Pokemon_All from "../islands/Pokemon_All.tsx"; //Importo el componente Pokemon_All
import re from "https://esm.sh/v135/preact-render-to-string@6.3.1/X-ZS8q/denonext/preact-render-to-string.mjs";


export default function Home() {
/*
  try {
    const pokemones = await Axios.get("https://lospoquimones.deno.dev");
    return (
      <div class="flex-column">
        <h1 class="mainTitle">Pokemones</h1>
        <div class="flex-row flex-around">
            {pokemones.data.map((pk: Pokemon) => ( 
              <PokemonComponent 
                name={pk.name} 
                image={pk.image} 
                sound={pk.sound} />
            ))}
          
        </div>
      </div>
    );
  } catch (err) {
    return <div>Ha habido un error</div>;
  }*/
  
  return (
    <>
      <h1>Pokemon_All</h1>
      <Pokemon_All />
    </>
  )
}
