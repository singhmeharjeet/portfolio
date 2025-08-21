type Sitemap = Array<{
	url: string
	lastModified?: string | Date
}>

export default async function sitemap() {
	let sitemap = [
		{
			url: 'https://meharjeet.com/',
			lastModified: new Date(),
		},
	]

	return sitemap satisfies Sitemap
}
