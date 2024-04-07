import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "Pokemon_All" | "Pokemon_Search" | "Pokemon_Add";
};

const Menu: FunctionComponent<MenuProps> = ({ selected }) => {  // Función Menu que recibe un objeto con la propiedad selected
  return (
    <div class="menu">
      <a href="/" class={selected === "Pokemon_All" ? "selected" : ""}> 
        Pokemones
      </a>
      <a href="/search" class={selected === "Pokemon_Search" ? "selected" : ""}>
        Buscar Pokémon
      </a>
      <a href="/add" class={selected === "Pokemon_Add" ? "selected" : ""}>
        Añadir Pokémon
      </a>
    </div>
  );
};

export default Menu;