"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

// @ts-ignore
import Resume from "@/public/resume.pdf";

import {
	ArrowUpRight,
	Book,
	GithubIcon,
	InstagramIcon,
	LucideLinkedin,
	MapPin,
	TrendingUp,
} from "lucide-react";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";

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
						<nav className="flex w-full items-center justify-between rounded px-4 py-2">
							<div className="flex gap-2">
								<Button variant="outline" size="icon" asChild>
									<Link href="https://www.linkedin.com/in/meharjeet-singh-7a870919b/">
										<LucideLinkedin className="w-6 h-6" />
										<span className="sr-only">
											Linkedin Link
										</span>
									</Link>
								</Button>
								<Button variant="outline" size="icon" asChild>
									<Link href="https://www.github.com/singhmeharjeet">
										<GithubIcon className="w-6 h-6" />
										<span className="sr-only">
											Github Link
										</span>
									</Link>
								</Button>
								<Button variant="outline" size="icon" asChild>
									<Link href="https://www.instagram.com/meharjeetsingh">
										<InstagramIcon className="w-6 h-6" />
										<span className="sr-only">
											Instagram Link
										</span>
									</Link>
								</Button>
							</div>
							<div className="flex gap-2">
								<ModeToggle />
								<Button
									className="font-bold"
									variant="outline"
									asChild
								>
									<Link href={Resume} target="_blank">
										Resume
									</Link>
								</Button>
							</div>
						</nav>

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
								description="Since 2020, Embracing the rich tapestry of cultures and the abundance of outdoor activities has made this transition truly enjoyable. From the captivating cities to the serene wilderness, Canada has exceeded my expectations as a welcoming and exciting new home."
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

				<section className="py-10 md:py-16">
					<div className="container max-w-screen-xl mx-auto px-4">
						<div className="flex flex-col lg:flex-row justify-between w-full">
							<div className="mb-10 lg:mb-0 w-full lg:w-1/2 relative">
								<h1 className="font-medium text-3xl md:text-4xl mb-5">
									Projects
								</h1>

								<p className="font-normal text-foreground/80 text-xs md:text-base [text-wrap:balance]">
									I have brought here my biggest and favorite
									works as a professional.
								</p>
								<Button
									size="lg"
									variant="outline"
									className="mt-0 lg:mt-4 absolute top-0 right-0 lg:relative"
									asChild
								>
									<Link
										href="https://github.com/singhmeharjeet/"
										className=""
									>
										See all projects
									</Link>
								</Button>
							</div>

							<div className="space-y-24 w-full lg:w-1/2 lg:block flex flex-col justify-end overflow-hidden">
								<BulletPoint
									index={1}
									title="Processor Pipeline Simulator"
									description="Provided a low-cost way to calculate the performance metrics of a processor based on 2 factors, pipeline width and trace size. This was done by using custom data structures to track dependencies at constant time. Reported execution, idle times, and bottleneck processes of the processor with more than 99% accuracy. Built using C++."
									link="https://github.com/singhmeharjeet/ProcessorPipelineSimulator"
								/>
								<BulletPoint
									index={2}
									title="Adoptify"
									description="Built and deployed a full-stack web application on Heroku that enabled its users to adopt or give away their pets. Used optimization techniques to implement infinite scroll and make the database requests 2 times faster. Tech Stack: React, Node.js, Express, Postgres, Heroku."
									link="https://github.com/singhmeharjeet/adoptify"
								/>
							</div>
						</div>
					</div>
				</section>

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

function Card({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: string | React.ReactNode;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: "10px" }}
			whileInView={{
				opacity: 1,
				translateY: "-10px",
				transition: { duration: 0.5 },
			}}
		>
			<div className="bg-card-background border-2 px-8 py-10 rounded-md">
				<div className="item-stretch flex flex-start">
					<div className="w-10 h-10">{icon}</div>

					<h4 className="font-medium text-card-foreground text-lg mb-4 [text-wrap:balance]">
						{title}
					</h4>
				</div>

				<p className="font-normal text-card-foreground/80 text-md [text-wrap:balance]">
					{description}
				</p>
			</div>
		</motion.div>
	);
}
function BulletPoint({
	index,
	title,
	description,
	link,
}: {
	index: number;
	title: string;
	description: string;
	link: string;
}) {
	return (
		<motion.div
			className="flex space-x-6"
			initial={{
				opacity: 0,
				x: 100,
			}}
			whileInView={{
				display: "flex",
				opacity: 1,
				x: 0,
				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},
			}}
		>
			<h1 className="font-normal text-primary text-3xl md:text-4xl">
				{index}
			</h1>

			<span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

			<div>
				<h1 className="font-normal text-3xl md:text-4xl mb-5 [text-wrap:balance]">
					{title}
				</h1>

				<p className="font-normal text-foreground/80 text-sm md:text-base [text-wrap:balance]">
					{description}
				</p>
				<div className="w-full flex justify-end items-center">
					<Button
						size="sm"
						variant="link"
						className="text-right"
						asChild
					>
						<Link href={link}>
							See the project
							<ArrowUpRight className="h-4 w-4 ml-1" />
						</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}
function EducationCard({
	year,
	title,
	description,
	link,
}: {
	year: string;
	title: string;
	description: string;
	link: string;
}) {
	return (
		<div className="bg-secondary px-8 py-10 rounded-md">
			<div className="flex w-full justify-between items-center">
				<h4 className="font-medium text-lg mb-4">{title}</h4>
				<h4 className="font-medium  text-lg mb-4">{year}</h4>
			</div>

			<p className="font-normal [text-wrap:balanced] text-md mb-4">
				{description}
			</p>

			<div className="w-full flex justify-end items-center">
				<Button size="sm" variant="link" className="text-right" asChild>
					<Link href={link}>
						Visit the website
						<ArrowUpRight className="h-4 w-4 ml-1" />
					</Link>
				</Button>
			</div>
		</div>
	);
}
function TestimonialCard({
	description,
	name,
	designation,
}: {
	description: string;
	name: string;
	designation: string;
}) {
	return (
		<div className="bg-secondary px-8 py-10 rounded-md">
			<p className="font-normal text-secondary-foreground text-md mb-4">
				{description}
			</p>

			<h6 className="font-semibold text-secondary-foreground text-md">
				{name}{" "}
				<span className="font-medium text-secondary-foreground/20 text-sm">
					- {designation}
				</span>
			</h6>
		</div>
	);
}
