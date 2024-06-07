import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Meharjeet Singh's Portfolio",
	description: "Meharjeet Singh's Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.jpeg" sizes="any" />
				<meta
					name="google-site-verification"
					content="UANb6nADUuNFEMSNiGh6erLOKd_-W3GrKVcywvSmA8U"
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
