import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import re from "https://esm.sh/v135/preact-render-to-string@6.3.1/X-ZS8q/denonext/preact-render-to-string.mjs";

export const Pokemon_Add: FunctionComponent = () => {  
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [sound, setSound] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [creator, setCreator] = useState<string>("");

    const handleAdd = async (event: Event) => {
        event.preventDefault();
        setError("");

        if (!name || !image || !sound || !creator) {
            setError("Por favor, llene todos los campos");
            return;
        }

        const response = await fetch("/api/POST", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, image, sound, creator }),
        });

        const data = await response.json();

        if (response.status !== 200) {
            setError(data.message);
            return;
        }

        setError(data);
        setTimeout(() => {
            location.reload();
        }, 500);
    };

    return (
        <>
            <form class="Pokemon_Add" onSubmit={handleAdd}>
                <h2 class="Titulo">Agregar Pokémon</h2>
                <label>
                    Nombre:
                    <input type="text" value={name} onInput={(event) => setName(event.currentTarget.value)} autocomplete="off" />
                </label>
                <label>
                    Imagen:
                    <input type="text" value={image} onInput={(event) => setImage(event.currentTarget.value)} autocomplete="off" />
                </label>
                <label>
                    Sonido:
                    <input type="text" value={sound} onInput={(event) => setSound(event.currentTarget.value)} autocomplete="off" />
                </label>
                <label>
                    Creador:
                    <input type="text" value={creator} onInput={(event) => setCreator(event.currentTarget.value)} autocomplete="off" />
                </label>
                <button type="submit">Agregar</button>
                {error && <p class="Error">{error}</p>}
            </form>
        </>


    );
};

export default Pokemon_Add;