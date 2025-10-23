import { TanStackDevtools } from "@tanstack/solid-devtools";
import { SolidQueryDevtoolsPanel } from "@tanstack/solid-query-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/solid-router-devtools";

export default function M01DevTools() {
	return (
		<TanStackDevtools
			plugins={[
				{
					name: "TanStack Query",
					render: <SolidQueryDevtoolsPanel />,
				},
				{
					name: "TanStack Router",
					render: <TanStackRouterDevtoolsPanel />,
				},
			]}
		/>
	);
}
