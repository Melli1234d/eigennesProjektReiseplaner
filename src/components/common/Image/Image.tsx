import { Image } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';


export type ImageProps = Image['props'];
export const Image = (props: ImageProps) => {
	return <ImageStyle {...props} />;

};


const ImageStyle = styled(Image)`
                border-radius: 10px;
`;
