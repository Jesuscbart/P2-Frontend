

import Axios from "npm:axios"; //Semejante a Fetch
import { Pokemon } from "../types.ts"; //Importo el tipo Pokemon
import PokemonComponent from "../components/PokemonComponent.tsx"; //Importo el componente PokemonComponent


export default async function Home() {

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

/*
import Pokemones from "../islands/Pokemones.tsx";

const Page = () => {  
  return (
  <>
    <h1 class="Titulo">Pokemones</h1>
    <Pokemones />
  </>
);};

export default Page;*/