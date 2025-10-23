import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

import type { JSX } from "solid-js";

const queryClient = new QueryClient();

export default function M01QueryProvider(props: { children: JSX.Element }) {
	return (
		<QueryClientProvider client={queryClient}>
			{props.children}
		</QueryClientProvider>
	);
}
