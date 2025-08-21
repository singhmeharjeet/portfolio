import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import React, { ReactNode, Suspense } from 'react'
import LinkPreview from './LinkPreview'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import GithubCard from './GithubCard'
import { Badge } from './ui/badge'
import { Wrench } from 'lucide-react'

type Props = {}

const ProjectSection = (props: Props) => {
	return (
		<section className="py-10 md:py-16">
			<div className="container max-w-screen-xl mx-auto px-4">
				<h1 className="font-medium text-3xl md:text-4xl mb-5">
					Projects
				</h1>
				<Tabs defaultValue="web" className="space-y-4">
					<TabsList>
						<TabsTrigger value={'web'}>Web</TabsTrigger>
						<TabsTrigger value={'cpp'}>C++</TabsTrigger>
						<TabsTrigger value={'other'}>Other</TabsTrigger>
					</TabsList>
					<TabsContent
						value="web"
						tabIndex={-1}
						className="grid sm:grid-cols-3 gap-[2vw]"
					>
						<Suspense>
							<LinkPreview
								url="https://makerbros.co"
								// badge={Array.of<ReactNode>(
								// 	<Badge color="bg-white flex w-fit text-sm items-center justify-center">
								// 		<Wrench className="h-3 w-auto mr-2" />
								// 		comming soon
								// 	</Badge>
								// )}
							/>
							<LinkPreview
								url="https://campos.studio/"
								badge={Array.of<ReactNode>(
									<Badge color="bg-white flex w-fit text-sm items-center justify-center">
										<Wrench className="h-3 w-auto mr-2" />
										comming soon
									</Badge>
								)}
							/>
							<LinkPreview url="https://bahrabualphotography.com/" />
							<LinkPreview url="https://learnsphere.cloud/" />
							<LinkPreview url="https://happimind.vercel.app/" />
						</Suspense>
					</TabsContent>
					<TabsContent
						value="cpp"
						tabIndex={-1}
						className="grid sm:grid-cols-3 gap-[2vw]"
					>
						<GithubCard
							url="https://github.com/singhmeharjeet/extensibleHashTable.git"
							title="Extensible Hash Table"
							description="A hash table implementation that uses a combination of linear probing and quadratic probing to resolve collisions."
						/>
						<GithubCard
							url="https://github.com/singhmeharjeet/all-pair-shortest-path.git"
							title="All Pair Shortest Path"
							description="Implementation of serial, parallel & distributed Floyd-Warshall algorithm for finding all pair shortest path in a graph."
						/>
						<GithubCard
							url="https://github.com/singhmeharjeet/hospitalQueueSim.git"
							title="Hospital Queue Simulation"
							description="A discrete event simulation to for queues at a hospital."
						/>
						<GithubCard
							url="https://github.com/singhmeharjeet/ProcessorPipelineSimulator.git"
							title="Processor Pipeline Simulator"
							description="A discrete event simulation to for queues at a hospital."
						/>
					</TabsContent>
					<TabsContent value="other" tabIndex={-1}>
						<GithubCard
							url=""
							title="Coming Soon"
							description="I am working on some cool projects. Stay tuned!"
						/>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	)
}

export default ProjectSection
