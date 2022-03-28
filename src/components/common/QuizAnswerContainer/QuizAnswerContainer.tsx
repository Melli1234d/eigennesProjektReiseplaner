import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type QuizAnswerContainerProps = Text['props'];
export const QuizAnswerContainer = (props: QuizAnswerContainerProps) => {
	return <QuizAnswerContainerStyle {...props} />;
};

const QuizAnswerContainerStyle = styled(Text)`
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	justify-content: space-between;
	flex-direction: row;

	display: flex;
`;
