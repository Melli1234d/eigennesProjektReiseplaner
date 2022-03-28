import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import { Title, View } from '@components/common';
import { TabTwoParamList } from '@navigation/root/BottomTabNavigator';
import { Paragraph } from '@components/common/Paragraph/Paragraph';
import { NextButton } from '@components/common/NextButton/NextButton';
import { BackButton } from '@components/common/BackButton/BackButton';
import { DetailContainer } from '@components/common/DetailContainer/DetailContainer';
import { CloseButton } from '@components/common/CloseButton/CloseButton';
import { DetailTitle } from '@components/common/DetailTitle/DetailTitle';
import { DetailSelection } from '@components/common/DetailSelection/DetailSelection';

type Props = StackScreenProps<TabTwoParamList, 'VenedigDetailScreen'>;
export default function VenedigDetailScreen({ navigation }: Props) {
	return (
		<Container  style={{backgroundColor:'white', paddingTop: '7rem', paddingBottom: '8rem'}}>
			<DetailContainer>
				<CloseButton onPress={() => navigation.navigate('TabTwoScreen')} style={{marginLeft: '17rem'}}>
					<AntDesign name="close" size={30} color="#0071B9" />{' '}
				</CloseButton>
				<DetailTitle>Venedig</DetailTitle>

				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ flexDirection: 'row', marginBottom: '1rem' }}
				>
					<DetailSelection>Meer</DetailSelection>
					<DetailSelection>heiß</DetailSelection>
				</ScrollView>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ flexDirection: 'row', marginBottom: '1rem' }}
				>
					<Image
						source={require('@assets/images/Venedig.png')}
						style={{
							minWidth: '10rem',
							minHeight: '6rem',
							borderRadius: '10px',
							marginRight: '0.5rem'
						}}
					/>
					<Image
						source={require('@assets/images/Venedig.png')}
						style={{
							minWidth: '10rem',
							minHeight: '6rem',
							borderRadius: '10px',
							marginRight: '0.5rem'
						}}
					/>
					<Image
						source={require('@assets/images/Venedig.png')}
						style={{
							minWidth: '10rem',
							minHeight: '6rem',
							borderRadius: '10px',
							marginRight: '0.5rem'
						}}
					/>
				</ScrollView>
				<Paragraph style={{ marginBottom: '1rem' }}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
					sed diam nonumy
				</Paragraph>

				<View style={{ flexDirection: 'row', marginBottom: '1rem' }}>
					<Image
						source={require('@assets/images/Venedig.png')}
						style={{
							minWidth: '3rem',
							minHeight: '3rem',
							borderRadius: '10px',
							marginRight: '0.5rem'
						}}
					/>
					<Image
						source={require('@assets/images/Venedig.png')}
						style={{
							minWidth: '3rem',
							minHeight: '3rem',
							borderRadius: '10px',
							marginRight: '0.5rem'
						}}
					/>
					<Image
						source={require('@assets/images/Venedig.png')}
						style={{
							minWidth: '3rem',
							minHeight: '3rem',
							borderRadius: '10px',
							marginRight: '0.5rem'
						}}
					/>
				</View>
				<Paragraph>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy
				</Paragraph>
			</DetailContainer>
		</Container>
	);
}

const Container = styled(View)`
	padding-left: 1.5rem;
	padding-right: 1.5rem;
`;
