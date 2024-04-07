// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $add from "./routes/add.tsx";
import * as $api_DELETE_name_ from "./routes/api/DELETE/[name].tsx";
import * as $api_GET_name_ from "./routes/api/GET/[name].tsx";
import * as $api_POST_addPokemon from "./routes/api/POST/addPokemon.tsx";
import * as $api_getPokemones from "./routes/api/getPokemones.tsx";
import * as $index from "./routes/index.tsx";
import * as $pokemon_name_ from "./routes/pokemon/[name].tsx";
import * as $search from "./routes/search.tsx";
import * as $Pokemon_Add from "./islands/Pokemon_Add.tsx";
import * as $Pokemon_All from "./islands/Pokemon_All.tsx";
import * as $Pokemon_Delete from "./islands/Pokemon_Delete.tsx";
import * as $Pokemon_Item from "./islands/Pokemon_Item.tsx";
import * as $Pokemon_Search from "./islands/Pokemon_Search.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/add.tsx": $add,
    "./routes/api/DELETE/[name].tsx": $api_DELETE_name_,
    "./routes/api/GET/[name].tsx": $api_GET_name_,
    "./routes/api/POST/addPokemon.tsx": $api_POST_addPokemon,
    "./routes/api/getPokemones.tsx": $api_getPokemones,
    "./routes/index.tsx": $index,
    "./routes/pokemon/[name].tsx": $pokemon_name_,
    "./routes/search.tsx": $search,
  },
  islands: {
    "./islands/Pokemon_Add.tsx": $Pokemon_Add,
    "./islands/Pokemon_All.tsx": $Pokemon_All,
    "./islands/Pokemon_Delete.tsx": $Pokemon_Delete,
    "./islands/Pokemon_Item.tsx": $Pokemon_Item,
    "./islands/Pokemon_Search.tsx": $Pokemon_Search,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
