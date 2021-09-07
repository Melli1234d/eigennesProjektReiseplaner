const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
	env: {
		'react-native/react-native': true,
		jest: true
	},
	extends: [
		'plugin:import/warnings',
		'plugin:react-native/all',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	plugins: ['react', 'react-native', 'prettier'],
	parser: '@babel/eslint-parser',
	rules: {
		'prettier/prettier': ['error', prettierOptions],
		'import/order': [
			'error',
			{
				groups: [
					'index',
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling'
				],
				pathGroups: [
					{
						pattern: '@assets/**',
						group: 'external'
					},
					{
						pattern: '@components/**',
						group: 'internal'
					},
					{
						pattern: '@constants/**',
						group: 'internal'
					},
					{
						pattern: '@hocs/**',
						group: 'internal'
					},
					{
						pattern: '@hooks/**',
						group: 'internal'
					},
					{
						pattern: '@contexts/**',
						group: 'internal'
					},
					{
						pattern: '@models/**',
						group: 'internal'
					},
					{
						pattern: '@navigation/**',
						group: 'internal'
					},
					{
						pattern: '@util/**',
						group: 'internal'
					}
				],
				pathGroupsExcludedImportTypes: ['builtin'],
				'newlines-between': 'always'
			}
		],
		'react-native/no-raw-text': 'off',
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'react-native',
						importNames: ['StyleSheet'],
						message:
							"Please import 'styled' from 'styled-components/native' instead."
					}
				]
			}
		]
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			rules: { 'prettier/prettier': ['warn', prettierOptions] }
		}
	],
	settings: {
		'react-native/style-sheet-object-names': [
			'EStyleSheet',
			'OtherStyleSheet',
			'PStyleSheet'
		]
	}
};
