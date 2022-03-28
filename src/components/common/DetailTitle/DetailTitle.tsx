import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type DetailTitleProps = Text['props'];
export const DetailTitle = (props: DetailTitleProps) => {
	return <DetailTitleStyle {...props} />;
};

const DetailTitleStyle = styled(Text)`
	font-size: 45px;
	margin-bottom: 0.5rem;
	color: #0071b9;
	margin-top: 1rem;
`;
