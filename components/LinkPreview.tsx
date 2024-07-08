"use client";
import Image from "next/image";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { ReactNode, Suspense, useEffect, useState } from "react";

interface LinkPreviewType {
	title: string;
	description: string;
	image: string;
}
const fetchData = async (url: string): Promise<LinkPreviewType | null> => {
	try {
		const response = await fetch(url, {
			method: "GET",
		});
		const data = await response.text();

		const parser = new DOMParser();
		const doc = parser.parseFromString(data, "text/html");
		const title = doc.querySelector("title")?.textContent || "";
		const description =
			doc
				.querySelector('meta[name="description"]')
				?.getAttribute("content") || "";
		const image =
			doc
				.querySelector('meta[property="og:image"]')
				?.getAttribute("content") || "";

		console.log({
			title,
			description,
			image,
		});
		return { title, description, image } as LinkPreviewType;
	} catch (error) {
		console.error(error);
		return null;
	}
};

function LinkPreview({ url, badge }: { url: string; badge?: ReactNode[] }) {
	const [previewData, setPreviewData] = useState<LinkPreviewType | null>(
		null
	);

	const [error, setError] = useState(false);

	useEffect(() => {
		try {
			fetchData(url).then((data) => setPreviewData(data));
		} catch (error) {
			console.error(error);
			setError(true);
		}
	}, [url]);

	if (error) {
		return <LinkPreviewError />;
	}

	return (
		<Suspense fallback={<LinkPreviewSkeleton />}>
			<LinkPreviewSub url={url} preview={previewData} badge={badge} />
		</Suspense>
	);
}

async function LinkPreviewSub({
	url,
	preview,
	badge,
}: {
	url: string;
	preview: LinkPreviewType | null;
	badge?: ReactNode[];
}) {
	return (
		<Card
			style={{ cursor: "pointer" }}
			className="min-h-[300px] hover:bg-card/50"
		>
			<Link
				href={url}
				target="_blank"
				className="flex flex-col justify-between h-full"
			>
				<CardHeader>
					<CardTitle>{preview?.title}</CardTitle>
					<CardDescription className="line-clamp-3">
						{preview?.description}
					</CardDescription>
					<div className="flex gap-2 flex-wrap">
						{badge?.length && badge.map((b) => b)}
					</div>
				</CardHeader>
				{preview?.image && (
					<CardContent className="size-fit overflow-hidden">
						<Image
							src={preview.image}
							alt="Link Preview"
							className="aspect-[1.9] object-contain rounded"
							height={300}
							width={570}
						/>
					</CardContent>
				)}
			</Link>
		</Card>
	);
}
function LinkPreviewSkeleton() {
	return (
		<Card style={{ cursor: "pointer" }} className="h-fit">
			<CardContent className="p-4 space-y-2">
				<Skeleton className="h-10" />

				<Skeleton className="h-4" />
				<Skeleton className="h-4" />

				<Skeleton className="rounded h-[200px] w-full aspect-[1.9] mt-auto" />
			</CardContent>
		</Card>
	);
}
function LinkPreviewError() {
	return (
		<Card style={{ cursor: "pointer" }} className="size-[300px]">
			<CardHeader>
				<CardTitle>Some Error Occured!</CardTitle>
			</CardHeader>
		</Card>
	);
}
export default LinkPreview;
