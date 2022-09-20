import { PrismaClient } from "@prisma/client/edge";

export interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const prisma = new PrismaClient({
			datasources: {
				db: {
					url: env.DATABASE_URL
				}
			}
		});

		return new Response("Hello World!");
	},
};