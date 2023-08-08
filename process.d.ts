declare namespace NodeJS {
	export interface ProcessEnv {
		NEXTAUTH_URL: string;
		NEXTAUTH_SECRET: string;
		BOT_TOKEN: string;
		BOT_USERNAME: string;
	}
}
