import { Text as DefaultText } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

import { ThemeProps } from '@constants/themes';

export type TitleProps = ThemeProps & DefaultText['props'];

export function Title(props: TitleProps) {
	return <TitleStyled {...props} style={props.style} />;
}

const TitleStyled = styled(DefaultText)`
	font-size: 45px;
	margin-bottom: 0.5rem;
	color: #0071b9;
	margin-top: 4.5rem;
`;
