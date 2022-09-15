/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		API_URL: "https://jsonplaceholder.typicode.com",
	},
};

module.exports = {
	env: {
		API_URL: "https://jsonplaceholder.typicode.com",
	},
};
