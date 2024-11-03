import { defineConfig } from "astro/config";

import deno from "@deno/astro-adapter";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    output: "server",
    adapter: deno(),
});
