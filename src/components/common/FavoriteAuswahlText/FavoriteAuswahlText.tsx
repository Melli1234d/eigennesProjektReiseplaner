import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type FavoriteAuswahlTextProps = Text['props'];
export const FavoriteAuswahlText = (props: FavoriteAuswahlTextProps) => {
	return <FavoriteAuswahlTextStyle {...props} />;
};

const FavoriteAuswahlTextStyle = styled(Text)`
	color: white;

	font-size: 12pt;
	text-align: center;
	justify-content: center;
	display: flex;
	align-items: center;
`;
