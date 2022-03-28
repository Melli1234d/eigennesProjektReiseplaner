import * as React from 'react';
import { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setLocationPreference } from '@redux/quizSlice';

import { Title, View } from '@components/common';
import { TabOneParamList } from '@navigation/root/BottomTabNavigator';
import { Paragraph } from '@components/common/Paragraph/Paragraph';
import { NextButton } from '@components/common/NextButton/NextButton';
import { BackButton } from '@components/common/BackButton/BackButton';
import { QuizAnswerButton } from '@components/common/QuizAnswerButton/QuizAnswerButton';
import { QuizAnswerContainer } from '@components/common/QuizAnswerContainer/QuizAnswerContainer';
import { QuizRelation } from '@components/common/QuizRelation/QuizRelation';
import { LocationPreference } from '@models/Quiz';

type Props = StackScreenProps<TabOneParamList, 'TravelQuizScreen'>;
export default function TravelQuizScreen({ navigation }: Props) {
	const questionOneSelection = useSelector(
		(state: RootState) => state.quiz.questionOne
	);
	const dispatch = useDispatch();
	return (
		<View>
			<Container>
				<View style={{ display: 'flex', justifyContent: 'flex-end' }}></View>
				<Title>Travel Quiz</Title>
				<Paragraph>
					Wohin würdest du am liebsten? A) Meer B)Berge C) Stadt
				</Paragraph>
			</Container>
			<QuizAnswerContainer>
				<QuizRelation>
					<QuizAnswerButton
						onPress={() =>
							dispatch(setLocationPreference(LocationPreference.Ocean))
						}
						selected={questionOneSelection == LocationPreference.Ocean}
					>
						<FontAwesome5 name="water" size={30} color="white" />
					</QuizAnswerButton>
					<Paragraph>Meer</Paragraph>
				</QuizRelation>

				<QuizRelation>
					<QuizAnswerButton
						onPress={() =>
							dispatch(setLocationPreference(LocationPreference.Mountain))
						}
						selected={questionOneSelection == LocationPreference.Mountain}
					>
						<FontAwesome5 name="mountain" size={30} color="white" />
					</QuizAnswerButton>
					<Paragraph>Berge</Paragraph>
				</QuizRelation>

				<QuizRelation>
					<QuizAnswerButton
						onPress={() =>
							dispatch(setLocationPreference(LocationPreference.City))
						}
						selected={questionOneSelection == LocationPreference.City}
					>
						<FontAwesome5 name="city" size={30} color="white" />
					</QuizAnswerButton>
					<Paragraph>Stadt</Paragraph>
				</QuizRelation>
			</QuizAnswerContainer>

			<Image
				source={require('@assets/images/travel.png')}
				style={{ width: '100%', minHeight: '115%' }}
			/>
			<Container
				style={{ justifyContent: 'space-between', flexDirection: 'row' }}
			>
				<BackButton onPress={() => navigation.navigate('TabOneScreen')}>
					<AntDesign name="arrowleft" size={30} color="#0071B9" />
				</BackButton>
				<NextButton onPress={() => navigation.navigate('QuestionTwoScreen')}>
					<AntDesign name="arrowright" size={30} color="#0071B9" />
				</NextButton>
			</Container>
		</View>
	);
}

const Container = styled(View)`
	padding: 1.5rem;
`;
