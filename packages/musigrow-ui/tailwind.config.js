module.exports = {
	content: ['./src/library/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('tailwindcss-debug-screens')],
};
