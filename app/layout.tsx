import ThemeProvider from "@/components/theme/theme-provider";
import Nav from "@/components/navigation/nav";

import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import AuthProvider from "./auth-provider";

const font = Rubik({ subsets: ["cyrillic"] });
export const metadata: Metadata = {
	title: "Telegram Auth",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AuthProvider>
			<html lang="en">
				<body className={font.className}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
					>
						<Nav />
						<main>{children}</main>
					</ThemeProvider>
				</body>
			</html>
		</AuthProvider>
	);
}
