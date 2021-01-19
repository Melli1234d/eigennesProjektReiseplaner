// babel.config.js

module.exports = function (api) {
	api.cache(true);
	return {
		plugins: ['babel-plugin-styled-components'],
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
