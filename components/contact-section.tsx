'use client'

import type React from 'react'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { personalInfo } from '@/data/portfolio-data'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useToast } from './ui/use-toast'
import z from 'zod'
import { Label } from './ui/label'

const contactFormSchema = z.object({
	email: z.string().email(),
	subject: z.string().max(100, { message: 'Word Limit is 100' }).optional(),
	message: z
		.string()
		.min(1, { message: 'Message is required' })
		.max(1000, { message: 'Word Limit is 1000' }),
})
type Inputs = z.infer<typeof contactFormSchema>

export function ContactSection() {
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

	const { toast } = useToast()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: zodResolver(contactFormSchema),
	})

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const response = await fetch('/api/send', {
			method: 'POST',
			body: JSON.stringify(data),
		})
		if (!response.ok) {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'Something went wrong. Please try again later.',
			})
			return
		}

		reset()
		toast({
			title: 'Message sent!',
			description: "I'll get back to you as soon as possible.",
		})
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
										onSubmit={handleSubmit(onSubmit)}
										className="space-y-8"
									>
										<div>
											<Label
												htmlFor="email"
												className="block mb-2"
											>
												Your email
											</Label>
											<Input
												{...register('email')}
												name="email"
												type="email"
												required
												autoComplete="email"
												className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
												placeholder="Enter your email"
											/>

											{errors.email && (
												<span className="text-xs italic text-red-500 mt-2">
													{errors.email.message}
												</span>
											)}
										</div>
										<div>
											<Label
												htmlFor="subject"
												className="block mb-2"
											>
												Subject
											</Label>
											<Input
												{...register('subject')}
												autoCapitalize="on"
												type="text"
												id="subject"
												className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
												placeholder="What can I help you with?"
											/>
											{errors.subject && (
												<p className="text-xs italic text-red-500 mt-2">
													{' '}
													{errors.subject?.message}
												</p>
											)}
										</div>
										<div className="sm:col-span-2">
											<Label
												htmlFor="message"
												className="block mb-2"
											>
												Your message
											</Label>
											<Textarea
												{...register('message')}
												id="message"
												rows={6}
												className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
												placeholder="Leave a message..."
											></Textarea>
											{errors.message && (
												<p className="text-xs italic text-red-500 mt-2">
													{errors.message?.message}
												</p>
											)}
										</div>
										<Button
											type="submit"
											className="py-3 px-5 text-sm font-medium  sm:w-fit"
										>
											Send message
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
