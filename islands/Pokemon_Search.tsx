import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import Axios from "npm:axios";
import Pokemon_Item from "./Pokemon_Item.tsx";
import {Pokemon} from "../types.ts"


const Pokemon_Search: FunctionComponent = () => {
    // Variables de estado    
    const [name, setName] = useState<string>("");
    const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);
    const [error, setError] = useState<string>("");

    const handleSearch = async (event: Event) => {  // Función para buscar un pokémon
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        const response = await fetch(`/api/GET/${name}`);   // Se envía una petición GET al servidor con el nombre del pokémon a buscar

        const pokemon_data: Pokemon[] = await response.json();  // Se obtiene la respuesta del servidor

        if (pokemon_data.length === 0) {    // Si no se ha encontrado el pokémon se muestra un mensaje de error
            setError(`No se encontró el pokemon ${name}`);
            setPokemon(null);
            return;
        }

        setError("");               // Limpia el mensaje de error
        setPokemon(pokemon_data);   // Actualiza el estado de los pokemones con la respuesta del servidor
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