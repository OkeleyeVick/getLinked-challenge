/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "320px",
			s499: "499px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				primary: "#903AFF",
				secondary: "#D434FE",
				dark: "#150E28",
			},
			backgroundImage: {
				radial_primary:
					"radial-gradient(circle, rgba(144,58,255,.9) -56%, rgba(255,255,255,0.009016106442576999) 69%, rgba(21,14,40,0.6616771708683473) 87%)",
			},
			backgroundColor: {
				primary: "#903AFF",
				secondary: "#D434FE",
				dark: "#150E28",
			},
		},
	},
	plugins: [],
};
