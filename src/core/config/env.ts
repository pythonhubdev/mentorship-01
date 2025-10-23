import { createEnv } from "@t3-oss/env-core";
import { string } from "valibot";

export const env = createEnv({
	server: {
		DATABASE_URL: string(),
		SERVER_URL: string(),
	},
	clientPrefix: "M01_",
	client: {
		M01_APP_TITLE: string(),
	},
	runtimeEnv: {
		SERVER_URL: process.env.SERVER_URL,
		DATABASE_URL: process.env.DATABASE_URL,
		M01_APP_TITLE: import.meta.env.M01_APP_TITLE,
	},
	emptyStringAsUndefined: true,
});
