import { FunctionComponent } from "preact";
import {Pokemon} from "../types.ts"
import { useState } from "preact/hooks";
import Pokemon_Delete from "./Pokemon_Delete.tsx";

const Pokemon_Item: FunctionComponent<Pokemon> = (props) => {    
    const {_id, name, image, sound} = props;
    const [deletePokemon, setDeletePokemon] = useState<boolean>(false);


    const Delete = () => {
        setDeletePokemon(true);
    }

    const Close = () => {
        setDeletePokemon(false);
    }

    const PlaySound = () => {
        const sound = document.getElementById(`SonidoPokemon ${_id}`) as HTMLAudioElement;
        if(sound != null) sound.play();
    }


    return (
    <div class="Pokemon_Item">

        <h2 class="pokemonName"><a href={`/pokemon/${name}`}>{name}</a></h2>
        <img src={image} class="pokemonImage" alt={`Image of the pokemon with id ${_id}`}/>
        <button class="SoundButton" onClick={PlaySound}>🔊</button>
        <audio id={`SonidoPokemon ${_id}`} src={sound}/>
        <button class="DeleteButton" onClick={Delete}>🗑️</button>
        {deletePokemon && 
            <div class="Modal">
                <Pokemon_Delete name={name}/>
                <button class="CloseButton" onClick={Close}>Cerrar</button>
                </div>
        }   
    </div>
    );
}

export default Pokemon_Item;