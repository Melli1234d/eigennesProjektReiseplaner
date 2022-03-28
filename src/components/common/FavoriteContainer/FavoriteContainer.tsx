import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type FavoriteContainerProps = Text['props'];
export const FavoriteContainer = (props: FavoriteContainerProps) => {
	return <FavoriteContainerStyle {...props} />;
};

const FavoriteContainerStyle = styled(Text)`
	padding-bottom: 5rem;
	margin-top: 1rem;
`;
