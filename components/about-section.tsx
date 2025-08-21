import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { LucideLinkedin, GithubIcon, InstagramIcon } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'

// @ts-expect-error
import Resume from '@/public/resume.pdf'
import { technologies } from '@/data/portfolio-data'

export function AboutSection() {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.3 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section id="about" ref={sectionRef} className="py-20 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`transition-all duration-1000 ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-4xl font-bold text-center mb-12">
						About Me
					</h2>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<Card className="p-8 shadow-lg">
								<CardContent className="space-y-6">
									<p className="text-lg leading-relaxed">
										{`I'm a passionate full-stack software
										developer with expertise spanning web
										development, mobile applications,
										artificial intelligence, and systems
										programming. Currently working at Maker
										Brothers Worldwide, I specialize in
										building high-performance, scalable
										solutions that drive business growth.`}
									</p>
									<p className="text-lg leading-relaxed">
										{`My journey includes developing
										everything from AI-powered mental health
										chatbots to complex inventory management
										systems, always focusing on creating
										meaningful impact through technology.`}
									</p>
									<div className="flex flex-wrap gap-2 pt-4">
										{technologies.map((tech, index) => (
											<Badge
												key={tech}
												variant="secondary"
												className={`transition-all duration-300 hover:scale-105`}
												style={{
													animationDelay: `${index * 0.1}s`,
													opacity: isVisible ? 1 : 0,
													transform: isVisible
														? 'translateY(0)'
														: 'translateY(20px)',
													transition: `all 0.5s ease-out ${index * 0.1}s`,
												}}
											>
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						</div>

						<div className="space-y-6">
							<div
								className={`space-y-6 transition-all duration-1000 delay-300 ${
									isVisible
										? 'opacity-100 translate-x-0'
										: 'opacity-0 translate-x-10'
								}`}
							>
								<h3 className="text-2xl font-semibold">
									What I Do
								</h3>
								<div className="space-y-4">
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
										<div>
											<h4 className="font-medium">
												Full-Stack Web Development
											</h4>
											<p className="text-muted-foreground">
												Building scalable web
												applications with modern
												frameworks
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
										<div>
											<h4 className="font-medium">
												Mobile App Development
											</h4>
											<p className="text-muted-foreground">
												Creating native Android apps
												with Kotlin and cross-platform
												solutions
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
										<div>
											<h4 className="font-medium">
												AI & Machine Learning
											</h4>
											<p className="text-muted-foreground">
												Implementing AI solutions and
												intelligent systems
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-3">
										<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
										<div>
											<h4 className="font-medium">
												Systems Programming
											</h4>
											<p className="text-muted-foreground">
												Low-level programming and
												performance optimization
											</p>
										</div>
									</div>
								</div>

								<ul className="flex w-full items-center justify-center gap-4 rounded px-4">
									<Button
										variant="outline"
										size="icon"
										asChild
									>
										<Link href="https://www.linkedin.com/in/meharjeet-singh-7a870919b/">
											<LucideLinkedin className="w-6 h-6" />
											<span className="sr-only">
												Linkedin Link
											</span>
										</Link>
									</Button>
									<Button
										variant="outline"
										size="icon"
										asChild
									>
										<Link href="https://www.github.com/singhmeharjeet">
											<GithubIcon className="w-6 h-6" />
											<span className="sr-only">
												Github Link
											</span>
										</Link>
									</Button>
									<Button
										variant="outline"
										size="icon"
										asChild
									>
										<Link href="https://www.instagram.com/meharjeetsingh">
											<InstagramIcon className="w-6 h-6" />
											<span className="sr-only">
												Instagram Link
											</span>
										</Link>
									</Button>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
