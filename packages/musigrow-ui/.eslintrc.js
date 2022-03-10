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
		'@infinumjs/eslint-config-core-ts',
		'airbnb',
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
		'testing-library/no-dom-import': 'off',
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
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
