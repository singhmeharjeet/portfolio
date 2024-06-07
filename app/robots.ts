type Robots = {
	rules:
		| {
				userAgent?: string | string[];
				allow?: string | string[];
				disallow?: string | string[];
				crawlDelay?: number;
		  }
		| Array<{
				userAgent: string | string[];
				allow?: string | string[];
				disallow?: string | string[];
				crawlDelay?: number;
		  }>;
	sitemap?: string | string[];
	host?: string;
};

export default async function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: "https://meharjeet.com/sitemap.xml",
	} satisfies Robots;
}
