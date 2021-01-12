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
		'prettier',
		'prettier/react'
	],
	plugins: ['react', 'react-native', 'prettier'],
	parser: '@babel/eslint-parser',
	rules: {
		'prettier/prettier': ['error', prettierOptions],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
				'newlines-between': 'always'
			}
		],
		'react-native/no-raw-text': [
			2,
			{
				skip: ['MonoText']
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
