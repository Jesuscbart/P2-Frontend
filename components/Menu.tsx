import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "List" | "Search" | "Add";
};

const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "List" ? "selected" : ""}>
        Listado Pokémon
      </a>
      <a href="/search" class={selected === "Search" ? "selected" : ""}>
        Buscar Pokémon
      </a>
      <a href="/add" class={selected === "Add" ? "selected" : ""}>
        Añadir Pokémon
      </a>
    </div>
  );
};

export default Menu;