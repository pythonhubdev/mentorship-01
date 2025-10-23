import cors from "@elysiajs/cors";
import openapi from "@elysiajs/openapi";
import { createFileRoute } from "@tanstack/solid-router";
import { toJsonSchema } from "@valibot/to-json-schema";
import { Elysia } from "elysia";
import openapiSpec from "~/core/config/swagger.ts";
import { CommonSchema } from "~/core/schema/common.ts";

const app = new Elysia({
	name: "Mentorship.01",
	prefix: "/api",
	aot: true,
	encodeSchema: true,
	strictPath: true,
})
	.use(
		openapi({
			documentation: openapiSpec,
			mapJsonSchema: {
				valibot: toJsonSchema,
			},
		}),
	)
	.use(
		cors({
			aot: true,
		}),
	)
	.get(
		"/health",
		() => ({
			success: true as const,
			message: "Mentorship.01 API is healthy",
			timestamp: new Date().toISOString(),
		}),
		{
			response: CommonSchema.healthResponse,
			detail: {
				summary: "API Health Check",
				description: "Check if the Mentroship API is running",
				tags: ["Health"],
			},
		},
	);

const handle = ({ request }: { request: Request }) => app.fetch(request);

export const Route = createFileRoute("/api/$")({
	server: {
		handlers: {
			GET: handle,
			POST: handle,
		},
	},
});

// Export app type for Eden Treaty
export type App = typeof app;
