const openapiSpec = {
	info: {
		title: "Mentoship.01",
		version: "0.1.0",
		description:
			"A mentorship application for mentoring people, collecting feedback after each session, and providing guidance, extensible to handle future session types.",
		contact: {
			name: "Mentorship.01",
			url: "https://mentorship.crazzle.dev",
			email: "pythonhubdev@gmail.com",
		},
	},
	servers: [
		{
			url: "http://localhost:3000",
			description: "Local Development Server",
		},
		{
			url: "https://mentorship.crazzle.dev",
			description: "Production Server",
		},
	],
};

export default openapiSpec;
