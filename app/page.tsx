"use client";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

import { Toaster } from "@/components/ui/toaster";

import EducationCard from "@/components/Education";
import Card from "@/components/InfoCard";

import Nav from "@/components/Nav";
import TestimonialCard from "@/components/Testimonial";
import { Book, MapPin, TrendingUp } from "lucide-react";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<Body />
			<Toaster />
		</ThemeProvider>
	);
}

function Body() {
	return (
		<>
			<div className="bg-background">
				<section className="py-10 md:py-16">
					<div className="container max-w-screen-xl mx-auto px-4">
						<Nav />

						<div className="text-center mt-12">
							<div className="flex justify-center mb-16">
								<Image
									width="128"
									height="128"
									className="w-32 h-32 md:w-40 md:h-40 rounded-full"
									src="https://github.com/singhmeharjeet.png"
									alt="Image"
								/>
							</div>

							<h6 className="font-medium text-foreground text-lg md:text-2xl uppercase mb-8">
								Meharjeet Singh
							</h6>

							<div className="text-3xl md:text-5xl [text-wrap:balance] tracking-tight font-extrabold">
								I am a person you would{" "}
								<span className="text-primary inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden w-auto">
									<ul className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
										<li>rely on</li>
										<li>talk to</li>
										<li>befriend</li>
										<li>trust</li>
										<li
											aria-hidden="true"
											className="invisible"
										>
											Blank
										</li>
									</ul>
								</span>
							</div>

							<p className="font-normal text-gray-600 text-md md:text-xl mb-16">
								I have a passion for software. I enjoy creating
								tools that make life easier for people.
							</p>

							<Button size="lg" asChild>
								<a href="#contact">Hire me</a>
							</Button>
						</div>
					</div>
				</section>

				<section className="py-10 md:py-16">
					<div className="container max-w-screen-xl mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<Card
								title="Vancouver"
								description="Since 2020, Embracing the rich tapestry of cultures and the abundance of outdoor activities has made this transition truly enjoyable."
								icon={
									<MapPin className="w-8 h-8 text-gray-500" />
								}
							/>
							<Card
								title="Love Web Dev"
								description="I started learning about making websites 3 years ago and I have self-taught myself most of the things."
								icon={
									<TrendingUp className="w-8 h-8 text-gray-500" />
								}
							/>
							<Card
								title="Enjoy Teaching"
								description="I got a chance to teach underprivileged kids in India which helped them clear their entrance exams. I taught them Mathematics and Science at my home."
								icon={
									<Book className="w-8 h-8 text-gray-500" />
								}
							/>
						</div>
					</div>
				</section>

				<ProjectSection />

				<section className="py-10 md:py-16">
					<div className="container max-w-screen-xl mx-auto px-4">
						<h1 className="font-medium text-3xl md:text-4xl mb-5">
							Education
						</h1>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
							<EducationCard
								year="2007-2019"
								title="Senior Secondary"
								description="I completed Grade 1 to 12 at St. Mark's Sr. Sec. Public School, Meera Bagh, New Delhi, India."
								link="https://www.saintmarksschool.com/meerabagh/"
							/>
							<EducationCard
								year="2020-Present"
								title="BSC Computer Science"
								description="I am currently pursuing my Batchelor's degree in Computer Science at the Simon Fraser University, Canada."
								link="https://www.sfu.ca"
							/>
						</div>
					</div>
				</section>

				<section className="py-10 md:py-16">
					<div className="container max-w-screen-xl mx-auto px-4">
						<h1 className="font-medium text-3xl md:text-4xl mb-5">
							Recommendations
						</h1>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<TestimonialCard
								description='"Meharjeet is a dedicated student who is well aware of his duties and responsibilities and is confident of completing any task bestowed upon him. He is very interactive in class, participates in group discussions and asks intelligent questions. He has also participated in Cultural
									Exchange Programme with Klosterchule, Rossleben, Germany."'
								name="Mrs Ritu Verma"
								designation="Educator"
							/>
						</div>
					</div>
				</section>

				<section className="bg-white dark:bg-popover">
					<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
						<h2
							className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
							id="contact"
						>
							Contact Me
						</h2>
						<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl [text-wrap:balanced]">
							Got a technical issue? Want to send feedback? Want
							to hire me? Let me know.
						</p>
						<ContactForm />
					</div>
				</section>
			</div>
		</>
	);
}
