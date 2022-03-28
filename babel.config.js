// babel.config.js

module.exports = function (api) {
	api.cache(true);
	return {
		plugins: [
			'babel-plugin-styled-components',
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
					alias: {
						'@assets': './assets',
						'@components': './src/components',
						'@constants': './src/constants',
						'@contexts': './src/contexts',
						'@hocs': './src/hocs',
						'@hooks': './src/hooks',
						'@models': './src/models',
						'@navigation': './src/navigation',
						'@redux': './src/redux',
						'@util': './src/util'
					}
				}
			]
		],
		presets: [
			'babel-preset-expo',
			[
				'@babel/preset-env',
				{
					targets: {
						node: 'current'
					}
				}
			],
			'@babel/preset-typescript',
			'module:metro-react-native-babel-preset'
		]
	};
};
