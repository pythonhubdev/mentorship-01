import * as v from "valibot";

export namespace CommonSchema {
	// Success response with data
	export const successResponse = <
		T extends v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
	>(
		dataSchema: T,
	) =>
		v.object({
			success: v.literal(true),
			message: v.string(),
			data: dataSchema,
		});

	export type SuccessResponse<T> = {
		success: true;
		message: string;
		data: T;
	};

	// Success response without data
	export const successMessageResponse = v.object({
		success: v.literal(true),
		message: v.string(),
	});

	export type SuccessMessageResponse = v.InferOutput<
		typeof successMessageResponse
	>;

	// Validation error response
	export const validationErrorResponse = v.object({
		success: v.literal(false),
		error: v.literal("Validation failed"),
		message: v.string(),
		details: v.optional(
			v.array(
				v.object({
					field: v.optional(v.string()),
					message: v.string(),
				}),
			),
		),
	});

	export type ValidationErrorResponse = v.InferOutput<
		typeof validationErrorResponse
	>;

	// Generic error response
	export const errorResponse = v.object({
		success: v.literal(false),
		error: v.string(),
		message: v.string(),
	});

	export type ErrorResponse = v.InferOutput<typeof errorResponse>;

	// Health check response
	export const healthResponse = v.object({
		success: v.literal(true),
		message: v.string(),
		timestamp: v.string(),
	});

	export type HealthResponse = v.InferOutput<typeof healthResponse>;
}
