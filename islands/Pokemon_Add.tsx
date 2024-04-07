import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

export const Pokemon_Add: FunctionComponent = () => {  
    const [name, setName] = useState<string>("");           // Variables de estado
    const [image, setImage] = useState<string>("");
    const [sound, setSound] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [creator, setCreator] = useState<string>("");

    const handleAdd = async (event: Event) => {            // Función para añadir un nuevo pokémon
        event.preventDefault();                            // Previene el comportamiento por defecto del formulario
        setError("");                                      // Limpia el mensaje de error

        if (!name || !image || !sound || !creator) {            // Si no se han rellenado todos los campos se muestra un mensaje de error
            setError("Por favor, rellene todos los campos");
            return;
        }

        const response = await fetch("/api/POST/addPokemon", {  // Se envía una petición POST al servidor con los datos del nuevo pokémon
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, image, sound, creator }),
        });

        const data = await response.json();    // Se obtiene la respuesta del servidor

        if (response.status !== 200) {       // Si la respuesta no es 200 (OK) se muestra un mensaje de error
            setError(data.message);
            return;
        }

        setError(data);                     // Si todo ha ido bien se muestra un mensaje de éxito
        setTimeout(() => {
            location.reload();
        }, 500);
    };

    return (    // Formulario para añadir un nuevo pokémon
        <>
            <form class="Pokemon_Add" onSubmit={handleAdd}>
                <h2 class="pageTitle">Agregar Pokémon</h2>
                <label>
                    <p>Nombre</p>
                    <input type="text" value={name} onInput={(event) => setName(event.currentTarget.value)} autocomplete="off" placeholder="Nombre" />
                </label>
                <label>
                    <p>Imagen</p>
                    <input type="text" value={image} onInput={(event) => setImage(event.currentTarget.value)} autocomplete="off" placeholder="Link de la imagen" />
                </label>
                <label>
                    <p>Sonido</p>
                    <input type="text" value={sound} onInput={(event) => setSound(event.currentTarget.value)} autocomplete="off" placeholder="Link del audio" />
                </label>
                <label>
                    <p>Creador</p>
                    <input type="text" value={creator} onInput={(event) => setCreator(event.currentTarget.value)} autocomplete="off" placeholder="Nombre del creador" />
                </label>
                <button type="submit">Añadir</button>
                {error && <p class="Error">{error}</p>}
            </form>
        </>


    );
};

export default Pokemon_Add;