import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type DetailSelectionProps = Text['props'];
export const DetailSelection = (props: DetailSelectionProps) => {
	return <DetailSelectionStyle {...props} />;
};

const DetailSelectionStyle = styled(Text)`
	color: white;
	background-color: #0071b9;
	margin-bottom: 0.5rem;
	padding: 0.51rem;
	padding-left: 1rem;
	padding-right: 1rem;
	border-radius: 20px;
	text-align: center;
	flex-direction: row;
	margin-right: 0.5rem;
`;
