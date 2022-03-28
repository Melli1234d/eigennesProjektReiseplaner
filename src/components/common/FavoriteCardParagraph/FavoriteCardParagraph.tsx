import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type FavoriteCardParagraphProps = Text['props'];
export const FavoriteCardParagraph = (props: FavoriteCardParagraphProps) => {
	return <FavoriteCardParagraphStyle {...props} />;
};

const FavoriteCardParagraphStyle = styled(Text)`
	color: #656464;
	background-color: white;
	margin-bottom: 0.5rem;
	font-size: 12pt;
	max-width: 15rem;
	text-align: left;
	background-color: rgba(255, 255, 255, 0.9);
`;
