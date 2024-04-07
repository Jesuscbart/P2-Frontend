import { FunctionComponent } from 'preact';
import { useState } from "preact/hooks";

type ModalProps = {
    name: string;
}

const Pokemon_Delete: FunctionComponent<ModalProps> = (props) => {
    const {name} = props;
    const [error, setError] = useState<string>("");
    const [creator, setCreator] = useState<string>("");

    const handleDelete = async (event: Event) => {
        event.preventDefault();
        setError("");

        if(!creator){
            setError("Por favor, ingrese su nombre como creador");
            return;
        }

        const response = await fetch(`/api/DELETE/${name}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({creator}),
        });

        const data = await response.json();

        if(response.status !== 200){
            setError(data.message);
            return;
        }

        setError(data);
        setTimeout(() => {location.reload()}, 500);
    }

    return (
        <>
            <form class="Pokemon_Delete" onSubmit={handleDelete}>
            <h2 class="Titulo"> Eliminar pokémon {name}</h2>
            <label>
                Creador:
                <input type="text" value={creator} onInput={(event) => setCreator(event.currentTarget.value)} autocomplete="off"/>
            </label>
            <button type="submit">Eliminar</button>
            {error && <p class="Error">{error}</p>}
            </form>
        </>
    );
}

export default Pokemon_Delete;