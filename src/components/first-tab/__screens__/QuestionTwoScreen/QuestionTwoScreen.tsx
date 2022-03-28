import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';

import { Title, View } from '@components/common';
import { TabOneParamList } from '@navigation/root/BottomTabNavigator';
import { Paragraph } from '@components/common/Paragraph/Paragraph';
import { NextButton } from '@components/common/NextButton/NextButton';
import { BackButton } from '@components/common/BackButton/BackButton';
import { QuizRelation } from '@components/common/QuizRelation/QuizRelation';
import { QuizAnswerButton } from '@components/common/QuizAnswerButton/QuizAnswerButton';
import { QuizAnswerContainer } from '@components/common/QuizAnswerContainer/QuizAnswerContainer';
import TabThreeScreen from '@components/third-tab/__screens__/TabThreeScreen/TabThreeScreen';
import { setLocationPreference, setTemperaturePreference } from '@redux/quizSlice';
import { LocationPreference, TemperaturePreference } from '@models/Quiz';

export type TabThreeParamList = {
	TabThreeScreen: undefined;
};
type Props = StackScreenProps<TabOneParamList, 'QuestionTwoScreen'>;
export default function QuestionTwoScreen({ navigation }: Props) {
	const questionTwoSelection = useSelector(
		(state: RootState) => state.quiz.questionTwo
	);
	const dispatch = useDispatch();
	return (
		<View>
			<Container>
				<View style={{ display: 'flex', justifyContent: 'flex-end' }}></View>
				<Title>Question Two</Title>
				<Paragraph>
					Mögen sie sehr heiße Temperaturen im Sommer? A) Ja (über 28Grad) B
					Nein (unter 28 Grad)
				</Paragraph>
			</Container>

			<QuizAnswerContainer>
				<QuizRelation>
					<QuizAnswerButton onPress={() =>
						dispatch(setTemperaturePreference(TemperaturePreference.Hot))
					}
														selected={questionTwoSelection == TemperaturePreference.Hot}>
						<Ionicons name='sunny-outline' size={30} color='white' />
					</QuizAnswerButton>
					<Paragraph>warm bis heiß</Paragraph>
				</QuizRelation>

				<QuizRelation>
					<QuizAnswerButton onPress={() =>
							dispatch(setTemperaturePreference(TemperaturePreference.Cold))
						}
						selected={questionTwoSelection == TemperaturePreference.Cold}
					>
						<Ionicons name='ios-partly-sunny-outline' size={30} color='white' />
					</QuizAnswerButton>
					<Paragraph> kühl bis warm</Paragraph>
				</QuizRelation>
			</QuizAnswerContainer>

			<Image
				source={require('@assets/images/questiontwo.png')}
				style={{ minWidth: '90%', minHeight: '95%' }}
			/>
			<Container
				style={{ justifyContent: 'space-between', flexDirection: 'row' }}
			>
				<BackButton onPress={() => navigation.navigate('TravelQuizScreen')}>
					<AntDesign name='arrowleft' size={30} color='#0071B9' />
				</BackButton>
				{/*// @ts-ignore	*/}
				<NextButton
					onPress={() =>
						navigation.navigate('TabThree', { screen: 'TabThreeScreen' })
					}
				>
					<AntDesign name='arrowright' size={30} color='#0071B9' />
				</NextButton>
			</Container>
		</View>
	);
}

const Container = styled(View)`
	padding: 1.5rem;
`;
