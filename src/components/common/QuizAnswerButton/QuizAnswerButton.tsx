import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

interface QuizAnswerButtonPropsAdditional {
	selected: boolean;
}
export type QuizAnswerButtonProps = QuizAnswerButtonPropsAdditional &
	TouchableOpacity['props'];
export const QuizAnswerButton = (props: QuizAnswerButtonProps) => {
	return <TouchableOpacityStyle {...props} />;
};

const TouchableOpacityStyle = styled(TouchableOpacity)<QuizAnswerButtonProps>`
	color: white;
	border-radius: 10px;
	padding: 10px;
	background-color: ${(props: QuizAnswerButtonProps) =>
		props.selected ? '#0071b9' : '#ADABAB'};

	margin-bottom: 0.7rem;
	font-size: 16pt;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	display: flex;
`;
