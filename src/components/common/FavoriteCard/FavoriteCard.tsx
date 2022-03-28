import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type FavoriteCardProps = TouchableOpacity['props'];
export const FavoriteCard = (props: FavoriteCardProps) => {
	return <TouchableOpacityStyle {...props} />;
};

const TouchableOpacityStyle = styled(TouchableOpacity)`
	margin-bottom: 0rem;

	border-radius: 10px;
	align-items: center;
	padding-top: 1rem;
	margin-top: 2rem;
`;
