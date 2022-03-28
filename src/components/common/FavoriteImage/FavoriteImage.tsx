import { Image } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type FavoriteImageProps = Image['props'];
export const FavoriteImage = (props: FavoriteImageProps) => {
	return <ImageStyle {...props} />;
};

const ImageStyle = styled(Image)`
	padding-top: 0.5rem;
	min-width: 310px;
	min-height: 100px;
	border-radius: 10px;
	height: 150px;
`;
