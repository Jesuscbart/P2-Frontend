import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import {Pokemon} from "../types.ts"
import Axios from "npm:axios";
import PokemonComponent from "../components/PokemonComponent.tsx";
import PokemonItem from "./PokemonItem.tsx";

/*const Pokemones: FunctionComponent<Pokemon> = (props) => {
    
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
      } 
}


export default Pokemones;*/