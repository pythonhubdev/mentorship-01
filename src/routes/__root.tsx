import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/solid-router";
import { HydrationScript, Suspense } from "solid-js/web";
import M01DevTools from "~/core/integrations/tanstack/Devtools.tsx";
import M01QueryProvider from "~/core/integrations/tanstack/QueryProvider.tsx";
import styleCss from "../styles.css?url";

export const Route = createRootRouteWithContext()({
	head: () => ({
		links: [{ rel: "stylesheet", href: styleCss }],
		meta: [
			{
				name: "Mentorship.01",
				title: "Mentorship.01 - Empowering Mentorship Sessions",
			},
		],
	}),
	shellComponent: RootComponent,
});

function RootComponent() {
	return (
		<html lang="en">
			<head>
				<HeadContent />
				<title>Mentorship-01</title>
				<HydrationScript />
			</head>
			<body>
				<Suspense>
					<M01QueryProvider>
						<Outlet />
						<M01DevTools />
					</M01QueryProvider>
				</Suspense>
				<Scripts />
			</body>
		</html>
	);
}
