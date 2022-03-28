import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type FavoriteCardCityProps = Text['props'];
export const FavoriteCardCity = (props: FavoriteCardCityProps) => {
	return <FavoriteCardCityStyle {...props} />;
};

const FavoriteCardCityStyle = styled(Text)`
	color: #656464;
	margin-top: 7.7rem;
	font-size: 24px;
	font-weight: bold;
	text-align: left;
	align-items: left;
	justify-content: left;
	background-color: rgba(255, 255, 255, 0.9);
`;
