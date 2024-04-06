import { FunctionComponent } from "preact";
import {Pokemon} from "../types.ts"
import { useState } from "preact/hooks";

const Pokemon_Item: FunctionComponent<Pokemon> = (props) => {    
    const {_id, name, image, sound} = props;

    const PlaySound = () => {
        const sound = document.getElementById(`SonidoPokemon ${_id}`) as HTMLAudioElement;
        if(sound != null) sound.play();
    }


    return (
    <div class="Pokemon_Item">

        <h2 class="PokemonName"><a href={`/pokemon/${name}`}>{name}</a></h2>
        <img src={image} class="PokemonImage" alt={`Image of the pokemon with id ${_id}`}/>
        <button class="SoundButton" onClick={PlaySound}>🔊</button>
        <audio id={`SonidoPokemon ${_id}`} src={sound}/>
    </div>
    );
}

export default Pokemon_Item;