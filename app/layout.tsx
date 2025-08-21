import type React from 'react'
import type { Metadata } from 'next'
import { Geist, Manrope } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const geist = Geist({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-geist',
})

const manrope = Manrope({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-manrope',
})

export const metadata: Metadata = {
	title: 'Meharjeet Singh - Software Developer Portfolio',
	description:
		'Full-stack developer specializing in web development, mobile apps, AI, and systems programming',
	generator: 'v0.app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`${geist.variable} ${manrope.variable} antialiased`}
			suppressHydrationWarning
		>
			<body className="font-sans">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange={false}
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
