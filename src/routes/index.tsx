import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return <p>Mentorship-01</p>;
}
