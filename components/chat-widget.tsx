import type React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MessageCircle, X, Send } from 'lucide-react'
import { personalInfo, projects } from '@/data/portfolio-data'

export function ChatWidget() {
	const [isOpen, setIsOpen] = useState(false)
	const [messages, setMessages] = useState([
		{
			id: 1,
			text: `Hi! I'm ${personalInfo.name}. Feel free to ask me anything about my work, projects, or experience!`,
			sender: 'bot',
		},
	])
	const [inputValue, setInputValue] = useState('')

	const generateBotResponse = (userMessage: string): string => {
		const message = userMessage.toLowerCase()

		if (message.includes('project') || message.includes('work')) {
			const projectCount = projects.reduce(
				(acc, group) => acc + group.projects.length,
				0
			)
			return `I've worked on ${projectCount} projects across various domains including web development, mobile apps, AI, and networking. Some highlights include winning 1st place in a hackathon with my AI Therapist project, building high-performance websites for Maker Brothers, and developing Android apps with ML integration. Would you like to know more about any specific project?`
		}

		if (
			message.includes('skill') ||
			message.includes('tech') ||
			message.includes('technology')
		) {
			return `I'm proficient in a wide range of technologies including Next.js, React, Node.js, Python, Kotlin, Java, C++, and more. I have experience with AI/ML, mobile development, distributed systems, networking, and full-stack web development. I'm always learning new technologies to stay current with industry trends.`
		}

		if (
			message.includes('experience') ||
			message.includes('job') ||
			message.includes('career')
		) {
			return `I'm currently working at Maker Brothers Worldwide where I build high-performance websites using Next.js, Sanity, and GSAP. Previously, I developed an inventory management system for Kitchen Mall. I also have extensive academic and personal project experience in AI, mobile development, and systems programming.`
		}

		if (
			message.includes('contact') ||
			message.includes('hire') ||
			message.includes('available')
		) {
			return `I'm always open to new opportunities! You can reach me at ${personalInfo.email} or ${personalInfo.phone}. I'm based in ${personalInfo.location} and available for both remote and on-site work. Feel free to download my resume or connect with me on LinkedIn!`
		}

		if (
			message.includes('education') ||
			message.includes('study') ||
			message.includes('university')
		) {
			return `I have a strong academic background with coursework in algorithms, distributed systems, networking, and AI. Some of my notable academic projects include implementing Floyd-Warshall algorithms with MPI, building custom memory allocators, and developing SDN applications with OpenFlow.`
		}

		if (
			message.includes('ai') ||
			message.includes('machine learning') ||
			message.includes('ml')
		) {
			return `I'm passionate about AI and have worked on several projects including a multilingual AI therapist chatbot that won 1st place in a hackathon, Bayesian Networks for ghost tracking in Pac-Man, and ML-based activity detection in my workout Android app. I enjoy exploring the intersection of AI and practical applications.`
		}

		if (
			message.includes('mobile') ||
			message.includes('android') ||
			message.includes('app')
		) {
			return `I've developed several Android applications including a comprehensive workout app with GPS tracking and ML-based activity detection, and TeamUp - a cross-platform group management app. I use Kotlin for Android development and focus on creating seamless user experiences with offline-first architecture.`
		}

		if (
			message.includes('hello') ||
			message.includes('hi') ||
			message.includes('hey')
		) {
			return `Hello! Great to meet you! I'm a passionate software engineer who loves building innovative solutions. Whether you're interested in my web development work, mobile apps, AI projects, or just want to chat about technology, I'm here to help. What would you like to know?`
		}

		if (message.includes('resume') || message.includes('cv')) {
			return `You can download my resume by clicking the Resume button in the navigation bar. It contains detailed information about my experience, projects, and technical skills. If you have any specific questions about my background, feel free to ask!`
		}

		// Default response
		return `That's an interesting question! While I'd love to chat more about that, I'm particularly excited to discuss my projects in web development, mobile apps, AI, and distributed systems. Is there anything specific about my technical experience you'd like to know more about?`
	}

	const handleSendMessage = () => {
		if (!inputValue.trim()) return

		const newMessage = {
			id: messages.length + 1,
			text: inputValue,
			sender: 'user' as const,
		}

		setMessages((prev) => [...prev, newMessage])
		const userInput = inputValue
		setInputValue('')

		setTimeout(() => {
			const botResponse = {
				id: messages.length + 2,
				text: generateBotResponse(userInput),
				sender: 'bot' as const,
			}
			setMessages((prev) => [...prev, botResponse])
		}, 1000)
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSendMessage()
		}
	}

	return (
		<>
			{/* Chat Button */}
			<Button
				onClick={() => setIsOpen(true)}
				className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 transition-all duration-300 ${
					isOpen ? 'scale-0' : 'scale-100 animate-pulse-glow'
				}`}
			>
				<MessageCircle className="w-6 h-6" />
			</Button>

			{/* Chat Window */}
			<div
				className={`fixed bottom-6 right-6 w-80 h-96 z-50 transition-all duration-300 ${
					isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
				}`}
			>
				<Card className="h-full shadow-2xl">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-lg">Chat with Me</CardTitle>
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsOpen(false)}
						>
							<X className="w-4 h-4" />
						</Button>
					</CardHeader>
					<CardContent className="flex flex-col h-full p-0">
						{/* Messages */}
						<div className="flex-1 overflow-y-auto p-4 space-y-3">
							{messages.map((message) => (
								<div
									key={message.id}
									className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
								>
									<div
										className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
											message.sender === 'user'
												? 'bg-primary text-primary-foreground'
												: 'bg-muted text-muted-foreground'
										}`}
									>
										{message.text}
									</div>
								</div>
							))}
						</div>

						{/* Input */}
						<div className="p-4 border-t">
							<div className="flex space-x-2">
								<Input
									value={inputValue}
									onChange={(e) =>
										setInputValue(e.target.value)
									}
									onKeyPress={handleKeyPress}
									placeholder="Type a message..."
									className="flex-1"
								/>
								<Button size="sm" onClick={handleSendMessage}>
									<Send className="w-4 h-4" />
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	)
}
