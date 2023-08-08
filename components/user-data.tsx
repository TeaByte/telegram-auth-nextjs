import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

// Get data from db example
export default async function UserData() {
	const session = await getServerSession(authOptions);

	if (!session) {
		return <>Not logged in to see this</>;
	}

	const user = await prisma.user.findUnique({
		where: {
			id: session.user.id,
		},
	});

	return (
		<div>
			<h1>{user?.name}</h1>
			<h1>{user?.image}</h1>
			<h1>{user?.id}</h1>
			<h1>{user?.createdAt.getTime()}</h1>
		</div>
	);
}
