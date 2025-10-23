import { Effect, Logger } from "effect";

// Configure logger with custom format
const customLogger = Logger.make(({ logLevel, message, annotations }) => {
	const timestamp = new Date().toISOString();
	const level = logLevel.label.toUpperCase();

	// Build context from annotations
	const context =
		Object.entries(annotations).length > 0
			? ` ${JSON.stringify(annotations)}`
			: "";

	// Color codes for different log levels
	const colors = {
		TRACE: "\x1b[90m", // Gray
		DEBUG: "\x1b[36m", // Cyan
		INFO: "\x1b[32m", // Green
		WARNING: "\x1b[33m", // Yellow
		ERROR: "\x1b[31m", // Red
		FATAL: "\x1b[35m", // Magenta
	};

	const reset = "\x1b[0m";
	const color = colors[level as keyof typeof colors] || "";

	globalThis.console.log(
		`${color}[${timestamp}] ${level}${reset} ${message}${context}`,
	);
});

// Export configured logger layer
export const LoggerLive = Logger.replace(Logger.defaultLogger, customLogger);

// Helper to create a logger effect
export const log = {
	debug: (message: string, annotations?: Record<string, unknown>) =>
		annotations
			? Effect.annotateLogs(Effect.logDebug(message), annotations)
			: Effect.logDebug(message),
	info: (message: string, annotations?: Record<string, unknown>) =>
		annotations
			? Effect.annotateLogs(Effect.logInfo(message), annotations)
			: Effect.logInfo(message),
	warning: (message: string, annotations?: Record<string, unknown>) =>
		annotations
			? Effect.annotateLogs(Effect.logWarning(message), annotations)
			: Effect.logWarning(message),
	error: (message: string, annotations?: Record<string, unknown>) =>
		annotations
			? Effect.annotateLogs(Effect.logError(message), annotations)
			: Effect.logError(message),
};
