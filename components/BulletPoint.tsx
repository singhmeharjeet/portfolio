import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function BulletPoint({
	index,
	title,
	description,
	link,
}: {
	index: number
	title: string
	description: string
	link: string
}) {
	return (
		<motion.div
			className="flex space-x-6"
			initial={{
				opacity: 0,
				x: 100,
			}}
			whileInView={{
				display: 'flex',
				opacity: 1,
				x: 0,
				transition: {
					duration: 0.5,
					ease: 'easeInOut',
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
	)
}
