

import { FunctionComponent } from "preact";

type PokemonProps = {
  name: string;
  image: string;
  sound: string;
};

const PokemonComponent: FunctionComponent<PokemonProps> = (props) => {
  const { name, image, sound } = props;
  return (
    <div class="pokemonContainer">
      <h2 class="text-overflow"><a href={`/pokemon/${name}`}>{name}</a></h2>
      <img class="img-m half-rounded" src={image} />
    </div>
  );
};

export default PokemonComponent;


