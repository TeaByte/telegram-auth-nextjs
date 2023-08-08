"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoginButton } from "@telegram-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInButton({ botUsername }: { botUsername: string }) {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <>...</>;
	}

	if (status === "authenticated") {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div>
						<Avatar>
							<AvatarImage
								src={session.user?.image ?? "/default.webp"}
								alt="@shadcn"
							/>
							<AvatarFallback>TG</AvatarFallback>
						</Avatar>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-56">
					<DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>test</DropdownMenuItem>
					<DropdownMenuItem disabled>test</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => signOut()}>
						Sign out
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}

	return (
		<LoginButton
			botUsername={botUsername}
			onAuthCallback={(data) => {
				signIn("telegram-login", { callbackUrl: "/" }, data as any);
			}}
		/>
	);
}

export function SignOutButton() {
	return <Button onClick={() => signOut()}>Sign out</Button>;
}
