import { Link, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function EducationCard({
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
