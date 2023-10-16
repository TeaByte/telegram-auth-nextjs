/**
 * @type {import('next').NextConfig}
 */
const config = {
	experimental: {
		externalDir: true,
	},
	images: {
		domains: ["t.me"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "t.me",
				port: "",
				pathname: "/u/**",
			},
		],
	},
};

module.exports = config;
