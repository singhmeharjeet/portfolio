import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, GraduationCap } from 'lucide-react'
import { experiences } from '@/data/portfolio-data'

export function ExperienceSection() {
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
		<section id="experience" ref={sectionRef} className="py-20 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`transition-all duration-1000 ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-4xl font-bold text-center mb-12">
						Experience & Education
					</h2>

					<div className="max-w-4xl mx-auto">
						<div className="relative">
							{/* Timeline Line */}
							<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

							{experiences.map((exp, index) => (
								<div
									key={index}
									className={`relative flex items-start mb-12 transition-all duration-700 ${
										isVisible
											? 'animate-slide-in-left'
											: 'opacity-0'
									}`}
									style={{
										animationDelay: `${index * 0.2}s`,
									}}
								>
									{/* Timeline Icon */}
									<div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
										{exp.type === 'work' ? (
											<Briefcase className="w-6 h-6 text-primary-foreground" />
										) : (
											<GraduationCap className="w-6 h-6 text-primary-foreground" />
										)}
									</div>

									{/* Content */}
									<div className="ml-8 flex-1">
										<Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
											<CardContent className="p-6">
												<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
													<h3 className="text-xl font-semibold">
														{exp.title}
													</h3>
													<span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
														{exp.period}
													</span>
												</div>
												<h4 className="text-lg text-primary font-medium mb-3">
													{exp.company}
												</h4>
												<p className="text-muted-foreground mb-4 leading-relaxed">
													{exp.description}
												</p>
												<div className="flex flex-wrap gap-2">
													{exp.technologies.map(
														(tech) => (
															<Badge
																key={tech}
																variant="secondary"
															>
																{tech}
															</Badge>
														)
													)}
												</div>
											</CardContent>
										</Card>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
