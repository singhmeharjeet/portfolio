import { CardHeader, CardTitle, CardContent, Card } from "./ui/card";
import Link from "next/link";

export default function GithubCard({
	url,
	title,
	description,
}: {
	url: string;
	title: string;
	description: string;
}) {
	return (
		<Link href={url}>
			<Card className="hover:bg-card/50">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent>{description}</CardContent>
			</Card>
		</Link>
	);
}
