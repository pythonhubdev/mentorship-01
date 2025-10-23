import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		devtools(),
		nitroV2Plugin({
			preset: "bun",
		}),
		solidPlugin({ ssr: true }),
		tailwindcss(),
		tanstackStart(),
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
	],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		allowedHosts: [],
	},
	envPrefix: ["VOX_"],
	optimizeDeps: {
		exclude: ["elysia", "@elysiajs/openapi", "@elysiajs/cors"],
	},
	ssr: {
		external: ["elysia", "@elysiajs/openapi", "@elysiajs/cors"],
		noExternal: ["@elysiajs/eden"],
	},
});
