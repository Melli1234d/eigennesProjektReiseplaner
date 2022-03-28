import Theme from '@constants/themes';
import useColorScheme from '@hooks/useColorScheme';

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: keyof typeof Theme.light & keyof typeof Theme.dark
) {
	const theme = useColorScheme();
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	} else {
		return Theme[theme][colorName];
	}
}
