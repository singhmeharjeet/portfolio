'use client'

import Image from 'next/image'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card'
import Link from 'next/link'
import { ReactNode } from 'react'
import React from 'react'

interface LinkPreviewType {
	title: string
	description: string
	image: string
}

const fetchData = async (url: string): Promise<LinkPreviewType | null> => {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'User-Agent': 'Mozilla/5.0 (compatible; LinkPreview/1.0)',
			},
		})

		if (!response.ok) {
			return null
		}

		const data = await response.text()

		// Simple regex-based parsing for server-side
		const titleMatch = data.match(/<title[^>]*>([^<]+)<\/title>/i)
		const descriptionMatch = data.match(
			/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i
		)
		const imageMatch = data.match(
			/<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i
		)

		const title = titleMatch?.[1] || ''
		const description = descriptionMatch?.[1] || title
		const image = imageMatch?.[1] || ''

		return { title, description, image }
	} catch (error) {
		console.error(error)
		return null
	}
}

function LinkPreview({ url, badge }: { url: string; badge?: ReactNode[] }) {
	// const previewData = await fetchData(url);
	const [previewData, setPreviewData] =
		React.useState<LinkPreviewType | null>(null)

	React.useEffect(() => {
		const getData = async () => {
			const data = await fetchData(url)
			setPreviewData(data)
		}

		getData()
	}, [url])

	if (!previewData) {
		return <LinkPreviewError />
	}
	console.log('previewData', previewData)

	return (
		<Card
			style={{ cursor: 'pointer' }}
			className="min-h-[300px] hover:bg-card/50"
		>
			<Link
				href={url}
				target="_blank"
				className="flex flex-col justify-between h-full"
			>
				<CardHeader>
					<CardTitle>{previewData.title}</CardTitle>
					<CardDescription className="line-clamp-3">
						{previewData.description}
					</CardDescription>
					<div className="flex gap-2 flex-wrap">
						{badge?.length &&
							badge.map((b, index) => (
								<span key={index}>{b}</span>
							))}
					</div>
				</CardHeader>
				{previewData.image && (
					<CardContent className="size-fit overflow-hidden">
						<Image
							src={previewData.image}
							alt="Link Preview"
							className="aspect-[1.9] object-contain rounded"
							height={300}
							width={570}
						/>
					</CardContent>
				)}
			</Link>
		</Card>
	)
}

function LinkPreviewError() {
	return (
		<Card style={{ cursor: 'pointer' }} className="size-[300px]">
			<CardHeader>
				<CardTitle>Some Error Occurred!</CardTitle>
			</CardHeader>
		</Card>
	)
}

export default LinkPreview
