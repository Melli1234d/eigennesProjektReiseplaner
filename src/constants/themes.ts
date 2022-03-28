export type ThemeProps = {
	lightColor?: string;
	darkColor?: string;
	blueColor?: string;
};

const tintColorLight = '#0071BF';
const tintColorDark = '#fff';

/**
 * TODO: Replace this implementation with whatever UI Framework you're using
 */
export default {
	blue: {
		text: '#0071B9',
		background: '#fff'
	},
	light: {
		text: 'black',
		background: '#fff',
		tint: tintColorLight,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorLight
	},
	dark: {
		text: '#fff',
		background: '#000',
		tint: tintColorDark,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorDark
	}
};
