import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import Axios from "npm:axios";
import Pokemon_Item from "./Pokemon_Item.tsx";
import {Pokemon} from "../types.ts"


const Pokemon_Search: FunctionComponent = () => {
    
    const [name, setName] = useState<string>("");
    const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);
    const [error, setError] = useState<string>("");

    const handleSearch = async (event: Event) => {
        event.preventDefault();

        const response = await fetch(`/api/GET/${name}`);

        const pokemon_data: Pokemon[] = await response.json();

        if (pokemon_data.length === 0) {
            setError(`No se encontró el pokemon ${name}`);
            setPokemon(null);
            return;
        }

        setError("");
        setPokemon(pokemon_data);
    };

    return (
        <>
            <h1 class="pageTitle">Buscar Pokémon</h1>
            <div class="Pokemon_Search">
                <label for = "Pokemon_Search">Nombre del Pokémon:</label>
                <input type = "text" id = "Pokemon_Search" name = "Pokemon_Search" onInput={(event) => setName(event.currentTarget.value)}
                onFocus={() => setError("")}/>
                <button onClick={handleSearch}>Buscar</button>
                {error && <p class="Error">{error}</p>}
                {pokemon && <div class = "Pokemones"> {pokemon.map((pokemon) => <Pokemon_Item {...pokemon}/>)}</div>}
            </div>
            
        </>
    );
}

export default Pokemon_Search;