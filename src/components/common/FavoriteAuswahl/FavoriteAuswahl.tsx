import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type FavoriteAuswahlProps = TouchableOpacity['props'];
export const FavoriteAuswahl = (props: FavoriteAuswahlProps) => {
	return <TouchableOpacityStyle {...props} />;
};

const TouchableOpacityStyle = styled(TouchableOpacity)`
	margin-right: 1rem;
	color: white;
	padding: 0.5rem;
	background-color: #0071b9;
	border-radius: 10px;
`;
