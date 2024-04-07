import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Pokemon } from "../types.ts";
import Pokemon_Item from "./Pokemon_Item.tsx";

const Pokemon_All: FunctionComponent = () => {
    const [pokemones, setPokemones] = useState<Pokemon[]>([]);  // Variable de estado pokemones que es un array de objetos Pokemon
    const [error, setError] = useState<string | null>(null);    // Variable de estado error que es un string

    useEffect(() => {   // Función que se ejecuta al cargar el componente
        const fetchPokemones = async () => {    // Función asíncrona que obtiene los pokemones de la API
            try {
                const response = await fetch("/api/GET/getPokemones");  // Se obtienen los pokemones de la API mediante la petición GET
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);   // Si la respuesta no es correcta se lanza un error
                }
                const data = await response.json(); // Se obtiene la respuesta de la API
                setPokemones(data);                // Se actualiza el estado de los pokemones con la respuesta de la API
            } catch (error) {
                setError(error.message);
            }
        };

        fetchPokemones();   // Se llama a la función fetchPokemones para obtener los pokemones
    }, []);

    if (error) {
        return <div>Error: {error}</div>;   // Si hay un error se muestra un mensaje de error
    }

    return (
        <div class="Pokemon_All">
            <h1 class="pageTitle">Pokemones</h1>
            <div class="flex-row flex-around">
                {pokemones.map((pk) => (
                    <Pokemon_Item {...pk} />
                ))}
            </div>
        </div>
    );
}

export default Pokemon_All;