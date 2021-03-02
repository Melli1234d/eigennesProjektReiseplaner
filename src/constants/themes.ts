export type ThemeProps = {
	lightColor?: string;
	darkColor?: string;
};

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

/**
 * TODO: Replace this implementation with whatever UI Framework you're using
 */
export default {
	light: {
		text: '#000',
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
