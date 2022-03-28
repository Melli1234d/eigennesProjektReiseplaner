import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type DetailContainerProps = Text['props'];
export const DetailContainer = (props: DetailContainerProps) => {
	return <DetailContainerStyle {...props} />;
};

const DetailContainerStyle = styled(Text)`
	border-color: #0071b9;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	padding-top: 1.5rem;
	flex-direction: column;
	display: flex;
	border-width: 1px;
	border-radius: 10px;
`;
