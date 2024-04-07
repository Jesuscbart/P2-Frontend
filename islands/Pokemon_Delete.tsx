import { FunctionComponent } from 'preact';
import { useState } from "preact/hooks";

type ModalProps = {
    name: string;
}

const Pokemon_Delete: FunctionComponent<ModalProps> = (props) => {  
    const {name} = props;   
    const [error, setError] = useState<string>("");         // Variables de estado
    const [creator, setCreator] = useState<string>("");

    const handleDelete = async (event: Event) => {        // Función para eliminar un pokémon
        event.preventDefault();                           // Previene el comportamiento por defecto del formulario
        setError("");                                     // Limpia el mensaje de error

        if(!creator){   // Si no se ha rellenado el campo de creador se muestra un mensaje de error
            setError("Por favor, ingrese su nombre como creador");
            return;
        }

        const response = await fetch(`/api/DELETE/${name}`, {   // Se envía una petición DELETE al servidor con el nombre del pokémon a eliminar
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({creator}),
        });

        const data = await response.json();   // Se obtiene la respuesta del servidor

        if(response.status !== 200){    // Si la respuesta no es 200 (OK) se muestra un mensaje de error
            setError(data.message);
            return;
        }

        setError(data);  // Si todo ha ido bien se muestra un mensaje de éxito
        setTimeout(() => {location.reload()}, 300); // Se recarga la página después de 300ms tras eliminar el pokémon. Sugerencia de copilot.
    }

    return (
        <>
            <form class="Pokemon_Delete" onSubmit={handleDelete}>
                <h2 class="Titulo_Eliminar"> Eliminar pokémon {name}</h2>
                <label>
                    <p>Introduzca el creador:</p>
                    <input type="text" value={creator} onInput={(event) => setCreator(event.currentTarget.value)} autocomplete="off"/>
                </label>
                <button type="submit">Eliminar</button>
                {error && <p class="Error">{error}</p>}
            </form>
        </>
    );
}

export default Pokemon_Delete;