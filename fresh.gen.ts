// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_getPokemones from "./routes/api/getPokemones.ts";
import * as $index from "./routes/index.tsx";
import * as $pokemon_name_ from "./routes/pokemon/[name].tsx";
import * as $Pokemon_All from "./islands/Pokemon_All.tsx";
import * as $Pokemon_Item from "./islands/Pokemon_Item.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/getPokemones.ts": $api_getPokemones,
    "./routes/index.tsx": $index,
    "./routes/pokemon/[name].tsx": $pokemon_name_,
  },
  islands: {
    "./islands/Pokemon_All.tsx": $Pokemon_All,
    "./islands/Pokemon_Item.tsx": $Pokemon_Item,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
