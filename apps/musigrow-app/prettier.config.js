module.exports = {
	singleQuote: true,
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	quoteProps: 'consistent',
	jsxSingleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: true,
	arrowParens: 'always',
	plugins: [require('prettier-plugin-tailwindcss')],
	tailwindConfig: './tailwind.config.js',
};
