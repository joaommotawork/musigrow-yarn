module.exports = {
	env: {
		'browser': true,
		'es2021': true,
		'jest/globals': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/all',
		'plugin:testing-library/react',
		'airbnb',
		'next',
		'next/core-web-vitals',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['jest', 'testing-library', 'react', '@typescript-eslint'],
	rules: {
		'testing-library/await-async-query': 'error',
		'testing-library/no-await-sync-query': 'error',
		'testing-library/no-debugging-utils': 'warn',
		'testing-library/no-dom-import': 'warn',
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
		// TODO Enable Default Behaviour After
		'react/jsx-filename-extension': 'warn',
		'react/jsx-props-no-spreading': 'warn',
		'react/no-invalid-html-attribute': 'warn',
		'react/function-component-definition': 'warn',
		'react/self-closing-comp': 'warn',
		'react/no-danger': 'warn',
		'react/button-has-type': 'warn',
		'arrow-body-style': 'warn',
		'spaced-comment': 'warn',
		'no-use-before-define': 'warn',
		'no-unused-vars': 'warn',
		'no-nested-ternary': 'warn',
		'@next/next/no-sync-scripts': 'warn',
	},
	overrides: [
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
		},
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
	/* settings: {
		jest: {
			version: require('jest/package.json').version,
		},
	}, */
};
