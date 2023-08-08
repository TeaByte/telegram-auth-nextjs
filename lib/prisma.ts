import { TelegramUserData } from "@telegram-auth/server";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function createUser(user: TelegramUserData) {
	console.log(user);
	return prisma.user.create({
		data: {
			id: user.id.toString(),
			name: user.first_name,
			image: user.photo_url,
		},
	});
}
