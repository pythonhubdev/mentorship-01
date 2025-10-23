import { createFileRoute } from "@tanstack/solid-router";
import { env } from "~/core/config/env.ts";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return <p>{env.M01_APP_TITLE}</p>;
}
