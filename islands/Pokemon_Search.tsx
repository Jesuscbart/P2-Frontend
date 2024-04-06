import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import Axios from "npm:axios";
import Pokemon_Item from "./Pokemon_Item.tsx";
import {Pokemon} from "../types.ts"


const Pokemon_Search: FunctionComponent = () => {
    
    const [search, setSearch] = useState<string>("");
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [error, setError] = useState<string | null>(null);

    const searchPokemon = async () => {
        try {
            const response = await Axios.get<Pokemon[]>(`https://lospoquimones.deno.dev/${search}`);
            if (response.status !== 200) {
                throw new Error(`Error: ${response.status}`);
            }
            setPokemon(response.data[0]);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div class="Pokemon_Search">
            <h1 class="mainTitle">Buscar Pokemon</h1>
            <input type="text" value={search} onInput={(e) => setSearch((e.target as HTMLInputElement).value)} />
            <button onClick={searchPokemon}>Buscar</button>
            {error && <div>Error: {error}</div>}
            {pokemon && <Pokemon_Item {...pokemon} />}
        </div>
    );

}

export default Pokemon_Search;