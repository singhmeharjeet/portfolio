'use client'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { ContactSection } from '@/components/contact-section'
import { ChatWidget } from '@/components/chat-widget'
import { Navigation } from '@/components/navigation'

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Navigation />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ExperienceSection />
			<ContactSection />
		</main>
	)
}
