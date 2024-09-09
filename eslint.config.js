module.export = [
	{
		ignores: [
			'**/node_modules/**',
			'**/.expo/**',
			'**/.next/**',
			'**/__generated__/**',
			'**/build/**',
			'/react-native-lab/react-native/**',
			'/docs/react-native-website/**',
			'**/android/**',
			'**/assets/**',
			'**/bin/**',
			'**/fastlane/**',
			'**/ios/**',
			'**/kotlin/providers/**',
			'**/vendored/**',
			'/docs/public/static/**',
		],
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		languageOptions: {
			ecmaVersion: 12,
			sourceType: 'module',
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			'@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
			react: require('eslint-plugin-react'),
			'react-hooks': require('eslint-plugin-react-hooks'),
		},
		rules: {
			'import/order': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
]
