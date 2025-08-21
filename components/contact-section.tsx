'use client'

import type React from 'react'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { personalInfo } from '@/data/portfolio-data'

export function ContactSection() {
	const [isVisible, setIsVisible] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// In a real implementation, this would send the form data to a backend
		console.log('Form submitted:', formData)
		alert("Thank you for your message! I'll get back to you soon.")
		setFormData({ name: '', email: '', message: '' })
	}

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<section id="contact" ref={sectionRef} className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`transition-all duration-1000 ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-4xl font-bold text-center mb-12">
						Get In Touch
					</h2>

					<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
						{/* Contact Info */}
						<div
							className={`space-y-8 transition-all duration-700 delay-200 ${
								isVisible
									? 'animate-slide-in-left'
									: 'opacity-0'
							}`}
						>
							<div>
								<h3 className="text-2xl font-semibold mb-6">
									{`Let's Connect`}
								</h3>
								<p className="text-lg text-muted-foreground mb-8">
									{`I'm always interested in new opportunities
									and exciting projects. Whether you have a
									question or just want to say hi, feel free
									to reach out!`}
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
										<Mail className="w-6 h-6 text-primary" />
									</div>
									<div>
										<h4 className="font-medium">Email</h4>
										<p className="text-muted-foreground">
											{personalInfo.email}
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
										<Phone className="w-6 h-6 text-primary" />
									</div>
									<div>
										<h4 className="font-medium">Phone</h4>
										<p className="text-muted-foreground">
											{personalInfo.phone}
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
										<MapPin className="w-6 h-6 text-primary" />
									</div>
									<div>
										<h4 className="font-medium">
											Location
										</h4>
										<p className="text-muted-foreground">
											{personalInfo.location}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div
							className={`transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
						>
							<Card className="shadow-lg">
								<CardHeader>
									<CardTitle>Send a Message</CardTitle>
								</CardHeader>
								<CardContent>
									<form
										onSubmit={handleSubmit}
										className="space-y-6"
									>
										<div>
											<Input
												name="name"
												placeholder="Your Name"
												value={formData.name}
												onChange={handleInputChange}
												required
												className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
											/>
										</div>
										<div>
											<Input
												name="email"
												type="email"
												placeholder="Your Email"
												value={formData.email}
												onChange={handleInputChange}
												required
												className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
											/>
										</div>
										<div>
											<Textarea
												name="message"
												placeholder="Your Message"
												rows={5}
												value={formData.message}
												onChange={handleInputChange}
												required
												className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
											/>
										</div>
										<Button
											type="submit"
											className="w-full"
										>
											<Send className="w-4 h-4 mr-2" />
											Send Message
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
