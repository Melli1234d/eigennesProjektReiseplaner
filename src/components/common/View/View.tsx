import { View as DefaultView } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

import { useThemeColor } from '@hooks/useThemeColor';

type ThemeProps = {
	lightColor?: string;
	darkColor?: string;
};

export type ViewProps = ThemeProps &
	DefaultView['props'] & {
		centerContent?: boolean;
		fullsize?: boolean;
	};

export function View(props: ViewProps) {
	const { style, lightColor, darkColor, ...otherProps } = props;
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		'background'
	);

	return (
		<DefaultViewStyled style={[{ backgroundColor }, style]} {...otherProps} />
	);
}

export const DefaultViewStyled = styled(DefaultView)<ViewProps>`
	${({ centerContent }) =>
		centerContent &&
		`
		flex: 1;
		align-items: center;
		justify-content: center;
  `}
	${({ fullsize }) =>
		fullsize &&
		`
		width: 100%;
		height: 100%;
	`}
`;
