import { FreshContext } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx";

const Layout = (ctx: FreshContext) => { 
    const Component = ctx.Component;    // Componente que se renderiza
    const route = ctx.route;            // Ruta actual de la página

    const page = route.split("/").pop();    // Determina la página con un "/" y tomando el último elemento

    const selected = page === "" ? "Pokemon_All" : page;   // En caso de que la página sea vacía, selecciona "List", en caso contrario, selecciona la página actual
  
    return (
      <>
        <Menu selected={selected as "Pokemon_All" | "Pokemon_Search" | "Pokemon_Add"} />   
        <Component />
      </>
    );
  };
  
  export default Layout;