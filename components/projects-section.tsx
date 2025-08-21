'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	ExternalLink,
	Github,
	Calendar,
	ChevronDown,
	ChevronUp,
} from 'lucide-react'
import { projects } from '@/data/portfolio-data'

export function ProjectsSection() {
	const [isVisible, setIsVisible] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [expandedProjects, setExpandedProjects] = useState<Set<string>>(
		new Set()
	)
	const sectionRef = useRef<HTMLElement>(null)
	const tabsRef = useRef<HTMLDivElement>(null)
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.2 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (tabsRef.current) {
			const activeButton = tabsRef.current.querySelector(
				`[data-category="${selectedCategory}"]`
			) as HTMLElement
			if (activeButton) {
				setIndicatorStyle({
					left: activeButton.offsetLeft,
					width: activeButton.offsetWidth,
				})
			}
		}
	}, [selectedCategory])

	const categories = ['All', ...projects.map((group) => group.category)]
	const filteredProjects =
		selectedCategory === 'All'
			? projects.flatMap((group) =>
					group.projects.map((project) => ({
						...project,
						category: group.category,
					}))
				)
			: projects
					.find((group) => group.category === selectedCategory)
					?.projects.map((project) => ({
						...project,
						category: selectedCategory,
					})) || []

	const toggleProjectExpansion = (projectTitle: string) => {
		setExpandedProjects((prev) => {
			const newSet = new Set(prev)
			if (newSet.has(projectTitle)) {
				newSet.delete(projectTitle)
			} else {
				newSet.add(projectTitle)
			}
			return newSet
		})
	}

	const needsReadMore = (description: string) => description.length > 150

	return (
		<section id="projects" ref={sectionRef} className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`transition-all duration-1000 ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-4xl font-bold text-center mb-12">
						Featured Projects
					</h2>

					<div className="flex justify-center mb-12">
						<div
							ref={tabsRef}
							className="relative flex flex-wrap justify-center gap-1 p-1 bg-muted rounded-lg"
						>
							<Button
								className="absolute ease-out transition-all duration-300 hover:bg-muted"
								variant="outline"
								style={{
									left: `${indicatorStyle.left}px`,
									width: `${indicatorStyle.width}px`,
								}}
							/>
							{categories.map((category) => (
								<Button
									key={category}
									data-category={category}
									variant="ghost"
									onClick={() =>
										setSelectedCategory(category)
									}
									className={`relative z-10 transition-all hover:bg-primary/0 duration-100 ${
										selectedCategory === category
											? 'text-foreground shadow-sm'
											: 'text-muted-foreground'
									}`}
									onMouseEnter={(e) => {
										if (selectedCategory !== category) {
											const button = e.currentTarget
											setIndicatorStyle({
												left: button.offsetLeft,
												width: button.offsetWidth,
											})
										}
									}}
									onMouseLeave={() => {
										if (tabsRef.current) {
											const activeButton =
												tabsRef.current.querySelector(
													`[data-category="${selectedCategory}"]`
												) as HTMLElement
											if (activeButton) {
												setIndicatorStyle({
													left: activeButton.offsetLeft,
													width: activeButton.offsetWidth,
												})
											}
										}
									}}
								>
									{category}
								</Button>
							))}
						</div>
					</div>

					{/* Projects Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredProjects.map((project, index) => (
							<Card
								key={`${project.title}-${index}`}
								className={`group hover:shadow-xl transition-all duration-00 hover:-translate-y-2`}
							>
								<CardHeader>
									<div className="flex justify-between items-start mb-2">
										<CardTitle className="text-xl group-hover:text-primary">
											{project.title}
										</CardTitle>
										{project.date && (
											<div className="flex items-center text-sm text-muted-foreground">
												<Calendar className="w-4 h-4 mr-1" />
												{project.date}
											</div>
										)}
									</div>
									<p className="text-muted-foreground">
										{project.shortDesc}
									</p>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div className="text-sm leading-relaxed">
											{needsReadMore(project.longDesc) ? (
												<>
													<p>
														{expandedProjects.has(
															project.title
														)
															? project.longDesc
															: null}
													</p>
													<Button
														variant="ghost"
														size="sm"
														onClick={() =>
															toggleProjectExpansion(
																project.title
															)
														}
														className="p-0 h-auto text-primary hover:text-primary/80 mt-2"
													>
														{expandedProjects.has(
															project.title
														) ? (
															<>
																<ChevronUp className="w-4 h-4 mr-1" />
																Read Less
															</>
														) : (
															<>
																<ChevronDown className="w-4 h-4 mr-1" />
																Read More
															</>
														)}
													</Button>
												</>
											) : (
												<p>{project.longDesc}</p>
											)}
										</div>

										<div className="flex flex-wrap gap-1">
											{project.tech.map((tech) => (
												<Badge
													key={tech}
													variant="secondary"
													className="text-xs"
												>
													{tech}
												</Badge>
											))}
										</div>

										{project.links && (
											<div className="flex flex-wrap gap-2 pt-2">
												{project.links.map((link) => (
													<Button
														key={link.url}
														variant="outline"
														size="sm"
														asChild
														className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
													>
														<a
															href={link.url}
															target="_blank"
															rel="noopener noreferrer"
														>
															{link.label.includes(
																'github'
															) ||
															link.label.includes(
																'GitHub'
															) ? (
																<Github className="w-4 h-4 mr-1" />
															) : (
																<ExternalLink className="w-4 h-4 mr-1" />
															)}
															{link.label}
														</a>
													</Button>
												))}
											</div>
										)}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
