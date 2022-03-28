import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type ResultCityTextProps = Text['props'];
export const ResultCityText = (props: ResultCityTextProps) => {
	return <ResultCityTextStyle {...props} />;
};

const ResultCityTextStyle = styled(Text)`
	color: #504f4f;
	margin-top: 0.5rem;
	font-size: 18px;
	font-weight: bold;
	text-align: left;
`;
