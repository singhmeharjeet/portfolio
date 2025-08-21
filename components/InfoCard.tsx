import { motion } from 'framer-motion'

export default function Card({
	title,
	description,
	icon,
}: {
	title: string
	description: string
	icon: string | React.ReactNode
}) {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: '10px' }}
			whileInView={{
				opacity: 1,
				translateY: '-10px',
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
	)
}
