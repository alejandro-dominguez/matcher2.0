/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
				OpenSans: ['Open Sans', 'sans-serif']
			}
		}
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}
