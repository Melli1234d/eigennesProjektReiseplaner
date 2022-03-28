import * as React from 'react';
import { Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styled from 'styled-components/native';

import { Text, Title, View } from '@components/common';
import { Button } from '@components/common/Button/Button';
import { TabOneParamList } from '@navigation/root/BottomTabNavigator';
import { Paragraph } from '@components/common/Paragraph/Paragraph';
import { ButtonText } from '@components/common/ButtonText/ButtonText';

type Props = StackScreenProps<TabOneParamList, 'TabOneScreen'>;
export default function TabOneScreen({ navigation }: Props) {
	return (
		<View>
			<Container style={{ backgroundColor: '#F8FCFF' }}>
				<Title>Perfekter Trip</Title>
				<Paragraph>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy
				</Paragraph>

				<Button onPress={() => navigation.navigate('TravelQuizScreen')}>
					<ButtonText>Start</ButtonText>
				</Button>
			</Container>
			<Image
				source={require('@assets/images/checkphoto.png')}
				style={{ minWidth: '100%', minHeight: '183%' }}
			/>
		</View>
	);
}

const Container = styled(View)`
	padding-left: 1.5rem;
`;
