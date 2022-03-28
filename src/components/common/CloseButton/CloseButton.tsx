import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type CloseButtonProps = TouchableOpacity['props'];
export const CloseButton = (props: CloseButtonProps) => {
	return <TouchableOpacityStyle {...props} />;
};

const TouchableOpacityStyle = styled(TouchableOpacity)`
	border-radius: 100%;
	border-color: #0071b9;
	border-width: 1px;
	border-style: solid;
	margin-left: 10rem;
	height: 45px;
	width: 45px;
	display: flex;
	justify-content: center;
	text-align: right;
	align-items: center;
`;
