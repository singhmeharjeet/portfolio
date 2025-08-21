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
	const [isVisible, setIsVisible] = useState(true) // Always visible for debugging
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [expandedProjects, setExpandedProjects] = useState<Set<string>>(
		new Set()
	)
	const [showAllProjects, setShowAllProjects] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)
	const tabsRef = useRef<HTMLDivElement>(null)
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, top: 0 })

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

	// Check if mobile on mount and window resize
	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		
		checkIsMobile()
		window.addEventListener('resize', checkIsMobile)
		
		return () => window.removeEventListener('resize', checkIsMobile)
	}, [])

	// Reset show all when category changes
	useEffect(() => {
		setShowAllProjects(false)
	}, [selectedCategory])

	useEffect(() => {
		if (tabsRef.current) {
			const activeButton = tabsRef.current.querySelector(
				`[data-category="${selectedCategory}"]`
			) as HTMLElement
			if (activeButton) {
				setIndicatorStyle({
					left: activeButton.offsetLeft,
					top: activeButton.offsetTop,
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

	// Apply mobile limit logic
	const displayedProjects = isMobile && !showAllProjects 
		? filteredProjects.slice(0, 4) 
		: filteredProjects

	const hasMoreProjects = isMobile && filteredProjects.length > 4

	// Use test projects if no real projects are available
	const finalDisplayedProjects = displayedProjects 

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
							className="relative flex flex-wrap justify-center gap-1 p-1 bg-muted rounded-lg max-w-full overflow-x-auto scrollbar-hide"
						>
							<Button
								className="absolute ease-out transition-all duration-300 hover:bg-muted"
								variant="outline"
								style={{
									left: `${indicatorStyle.left}px`,
									top: `${indicatorStyle.top}px`,
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
									className={`relative z-10 transition-all hover:bg-primary/0 duration-100 whitespace-nowrap flex-shrink-0 text-sm ${
										selectedCategory === category
											? 'text-foreground shadow-sm'
											: 'text-muted-foreground'
									}`}
									onMouseEnter={(e) => {
										if (selectedCategory !== category) {
											const button = e.currentTarget
											setIndicatorStyle({
												left: button.offsetLeft,
												top: button.offsetTop,
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
													top: activeButton.offsetTop,
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
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{finalDisplayedProjects.map((project, index) => (
							<Card
								key={`${project.title}-${index}`}
								className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
							>
								<CardHeader className="pb-3">
									<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
										<CardTitle className="text-lg sm:text-xl group-hover:text-primary leading-tight">
											{project.title}
										</CardTitle>
										{project.date && (
											<div className="flex items-center text-xs sm:text-sm text-muted-foreground flex-shrink-0">
												<Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
												{project.date}
											</div>
										)}
									</div>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{project.shortDesc}
									</p>
								</CardHeader>
								<CardContent className="pt-0">
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
														className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent text-xs sm:text-sm"
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
																<Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
															) : (
																<ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
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

					{/* Show More Button for Mobile */}
					{hasMoreProjects && (
						<div className="flex justify-center mt-8">
							<Button
								onClick={() => setShowAllProjects(!showAllProjects)}
								variant="outline"
								className="px-6 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
							>
								{showAllProjects ? (
									<>
										<ChevronUp className="w-4 h-4 mr-2" />
										Show Less
									</>
								) : (
									<>
										<ChevronDown className="w-4 h-4 mr-2" />
										Show More ({filteredProjects.length - 4} more)
									</>
								)}
							</Button>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
