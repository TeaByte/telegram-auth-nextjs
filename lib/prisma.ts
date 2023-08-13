import { TelegramUserData } from "@telegram-auth/server";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function createUserOrUpdate(user: TelegramUserData) {
	return prisma.user.upsert({
		where: {
			id: user.id.toString(),
		},
		create: {
			id: user.id.toString(),
			name: user.first_name,
			image: user.photo_url,
		},
		update: {
			name: user.first_name,
			image: user.photo_url,
		},
	});
}
