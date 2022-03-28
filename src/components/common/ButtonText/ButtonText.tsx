import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type ButtonTextProps = Text['props'];
export const ButtonText = (props: ButtonTextProps) => {
	return <ButtonTextStyle {...props} />;
};

const ButtonTextStyle = styled(Text)`
	color: white;
	text-align: center;
	font-size: 12px;
`;
