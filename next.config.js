/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
			},
		],
		domains: ["images.unsplash.com", "https://github.com/"],
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.pdf/,
			type: "asset/resource",
			generator: {
				filename: "static/Resume_Meharjeet_Singh[ext]",
			},
		});

		return config;
	},
};

module.exports = nextConfig;
