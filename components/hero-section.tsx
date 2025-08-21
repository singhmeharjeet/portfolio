'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Code, Database, Smartphone, Brain } from 'lucide-react'

export function HeroSection() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		setIsVisible(true)
	}, [])

	const skills = [
		{ icon: Code, label: 'Web Development', delay: '0.2s' },
		{ icon: Smartphone, label: 'Mobile Apps', delay: '0.5s' },
		{ icon: Brain, label: 'AI & ML', delay: '0.8s' },
		{ icon: Database, label: 'Systems', delay: '1.1s' },
	]

	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Background Animation */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
				<div
					className={`transition-all duration-1000 ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-loose">
						Meharjeet Singh
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
						Full-Stack Software Developer crafting innovative
						solutions across web, mobile, AI, and systems
						programming
					</p>
				</div>

				{/* Animated Skills */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
					{skills.map((skill, index) => (
						<div
							key={skill.label}
							className={`p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-float`}
							style={{
								animationDelay: skill.delay,
								opacity: isVisible ? 1 : 0,
								transform: isVisible
									? 'translateY(0)'
									: 'translateY(50px)',
								transition: `all 0.4s ease-out ${skill.delay}`,
							}}
						>
							<skill.icon className="w-8 h-8 text-primary mx-auto mb-3" />
							<p className="text-sm font-medium">{skill.label}</p>
						</div>
					))}
				</div>

				<div
					className={`transition-all duration-1000 delay-0 ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<Button
						size="lg"
						className="mb-8"
						onClick={() =>
							document
								.getElementById('about')
								?.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Explore My Work
						<ArrowDown className="w-4 h-4 ml-2" />
					</Button>
				</div>
			</div>
		</section>
	)
}
