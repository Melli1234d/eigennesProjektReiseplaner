import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export type NextButtonProps = TouchableOpacity['props'];
export const NextButton = (props: NextButtonProps) => {
	return <TouchableOpacityStyle {...props} />;
};

const TouchableOpacityStyle = styled(TouchableOpacity)`
	border-radius: 100%;
	border-color: #0071b9;
	border-width: 1px;
	border-style: solid;
	height: 45px;
	width: 45px;
	justify-content: center;
	text-align: center;
	align-items: center;
`;
