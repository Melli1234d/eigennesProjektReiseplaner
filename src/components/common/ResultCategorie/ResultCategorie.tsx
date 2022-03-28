import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type ResultCategorieProps = TouchableOpacity['props'];
export const ResultCategorie = (props: ResultCategorieProps) => {
	return <TouchableOpacityStyle {...props} />;
};

const TouchableOpacityStyle = styled(TouchableOpacity)`
	color: #0071b9;
	font-weight: bold;
	margin-right: 1.5rem;
	padding: 0.5rem;
	border-bottom-width: 1px;
	border-bottom-color: #0071b9;
	font-size: 16px;
	font-family: Helvetica;
`;
