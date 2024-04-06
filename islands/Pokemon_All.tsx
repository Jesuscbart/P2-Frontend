import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Pokemon } from "../types.ts";
import Pokemon_Item from "./Pokemon_Item.tsx";

const Pokemon_All: FunctionComponent = () => {
    const [pokemones, setPokemones] = useState<Pokemon[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemones = async () => {
            try {
                const response = await fetch("/api/getPokemones");
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setPokemones(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchPokemones();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div class="Pokemon_All">
            <h1 class="mainTitle">Pokemones</h1>
            <div class="flex-row flex-around">
                {pokemones.map((pk) => (
                    <Pokemon_Item {...pk} />
                ))}
            </div>
        </div>
    );
}

export default Pokemon_All;