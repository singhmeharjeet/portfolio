import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import LinkPreview from "./LinkPreview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type Props = {};

const ProjectSection = (props: Props) => {
	return (
		<section className="py-10 md:py-16">
			<div className="container max-w-screen-xl mx-auto px-4">
				<h1 className="font-medium text-3xl md:text-4xl mb-5">
					Projects
				</h1>
				<Tabs defaultValue="web" className="space-y-4">
					<TabsList>
						<TabsTrigger value={"web"}>Web</TabsTrigger>
						<TabsTrigger value={"cpp"}>C++</TabsTrigger>
						<TabsTrigger value={"other"}>Other</TabsTrigger>
					</TabsList>
					<TabsContent
						value="web"
						tabIndex={-1}
						className="grid sm:grid-cols-3 gap-[2vw]"
					>
						<LinkPreview url="https://makerbros.vercel.app/" />
						<LinkPreview url="https://campos2.vercel.app/" />
						<LinkPreview url="https://bbp-gamma.vercel.app/" />
						<LinkPreview url="https://learnsphere.cloud/" />
						<LinkPreview url="https://happimind.vercel.app/" />
					</TabsContent>
					<TabsContent value="cpp" tabIndex={-1}>
						<Link href="">
							<Card>
								<CardHeader>
									<CardTitle>Extensible Hash Table</CardTitle>
								</CardHeader>
								<CardContent>
									A hash table implementation that uses a
									combination of linear probing and quadratic
									probing to resolve collisions.
								</CardContent>
							</Card>
						</Link>
					</TabsContent>
					<TabsContent value="other" tabIndex={-1}>
						other ipsum dolor sit amet consectetur adipisicing elit.
						Harum repellendus libero eligendi corrupti corporis
						voluptatibus nemo provident. Beatae, corporis a!
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
};

export default ProjectSection;
