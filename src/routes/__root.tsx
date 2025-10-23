import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/solid-router";
import M01DevTools from "~/core/integrations/tanstack/devtools.tsx";
import M01QueryProvider from "~/core/integrations/tanstack/QueryProvider.tsx";
import styleCss from "../styles.css?url";

export const Route = createRootRouteWithContext()({
	head: () => ({
		links: [{ rel: "stylesheet", href: styleCss }],
		meta: [
			{
				name: "Mentorship.01",
			},
		],
	}),
	shellComponent: RootComponent,
});

function RootComponent() {
	return (
		<>
			<M01QueryProvider>
				<HeadContent />
				<Outlet />
				<M01DevTools />
			</M01QueryProvider>

			<Scripts />
		</>
	);
}
