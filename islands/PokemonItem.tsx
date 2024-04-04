import { FunctionComponent } from "preact";
import {Pokemon} from "../types.ts"
import { useState } from "preact/hooks";

const PokemonItem: FunctionComponent<Pokemon> = (props) => {
    const {_id, name, image, sound} = props;

    const alternativeText = `Imagen del pokemon con id ${_id}`;
    const soundID = `Sonido del pokemon con id ${_id}`;
    const vinculo = `/pokemon/${name}`;

    const PlaySound = () => {
        const audio = document.getElementById(soundID) as HTMLAudioElement;
        if(audio !== null) audio.play();
    }

    return (
        <div class="Pokemon">
            <h2>{name}</h2>
            <img src={image} class="ImagenPokemon" alt={"imagen del pokemon"}/>
            <button class="BotonSonido" onClick={PlaySound}>🔊</button>
            <audio id={soundID} src={sound}/>
            <a href = {"/"}>Atrás</a>
        </div>
    );
}

export default PokemonItem;