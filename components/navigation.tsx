'use client'
import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Download, Menu, X } from 'lucide-react'
import { personalInfo } from '@/data/portfolio-data'
import { ModeToggle } from './ModeToggle'
import {
	ThemeToggleButton,
	useThemeTransition,
} from './ui/shadcn-io/theme-toggle-button'
import { useTheme } from 'next-themes'

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const { setTheme, resolvedTheme } = useTheme()
	const { startTransition } = useThemeTransition()
	const [mounted, setMounted] = useState(false)

	// Removed unused mounted state
	useEffect(() => {
		setMounted(true)
	}, [])
	const handleThemeToggle = useCallback(() => {
		const newMode = resolvedTheme === 'dark' ? 'light' : 'dark'

		startTransition(() => {
			setTheme(newMode)
		})
	}, [setTheme, startTransition, resolvedTheme])

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navItems = [
		{ href: '#about', label: 'About' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#contact', label: 'Contact' },
	]

	const handleResumeDownload = () => {
		const link = document.createElement('a')
		link.href = personalInfo.resume
		link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`
		link.click()
	}

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-background/80 backdrop-blur-md shadow-lg'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="font-bold text-xl text-primary">
						{personalInfo.name}
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="text-foreground hover:text-primary transition-colors duration-200"
							>
								{item.label}
							</a>
						))}
						<ThemeToggleButton
							theme={resolvedTheme as 'light' | 'dark'}
							onClick={handleThemeToggle}
							showLabel
							variant="polygon"
						/>
						<Button
							onClick={handleResumeDownload}
							className="animate-pulse-glow"
						>
							<Download className="w-4 h-4 mr-2" />
							Resume
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<Button
							variant="ghost"
							size="sm"
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
						>
							{isMobileMenuOpen ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden bg-card border-t border-border">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{item.label}
								</a>
							))}
							<div className="px-3 py-2 flex items-center justify-between">
								<span className="text-foreground">Theme</span>
								<ModeToggle />
							</div>
							<div className="px-3 py-2">
								<Button
									onClick={handleResumeDownload}
									className="w-full"
								>
									<Download className="w-4 h-4 mr-2" />
									Resume
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
