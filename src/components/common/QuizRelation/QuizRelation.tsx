import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type QuizRelationProps = Text['props'];
export const QuizRelation = (props: QuizRelationProps) => {
	return <QuizRelationStyle {...props} />;
};

const QuizRelationStyle = styled(Text)`
	color: #656464;
	text-align: center;
	font-size: 12pt;
	justify-content: space-between;
	flex-dirction: column;
`;
