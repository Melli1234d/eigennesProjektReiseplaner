import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type TextBackgroundOverlayProps = Text['props'];
export const TextBackgroundOverlay = (props: TextBackgroundOverlayProps) => {
	return <TextBackgroundOverlayStyle {...props} />;
};

const TextBackgroundOverlayStyle = styled(Text)`
	background-color: white;
	opacity: 85%;
	text-align: center;
	justify-content: center;
	display: flex;
	align-items: center;
`;
