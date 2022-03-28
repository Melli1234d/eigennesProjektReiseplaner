import * as React from 'react';
import { FlatList, ScrollView, Image, ImageBackground } from 'react-native';
import {
	AntDesign,
	Feather,
	MaterialCommunityIcons,
	FontAwesome5
} from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { useState } from 'react';

import { Paragraph } from '@components/common/Paragraph/Paragraph';
import { ResultCategorie } from '@components/common/ResultCategorie/ResultCategorie';
import { ResultCityText } from '@components/common/ResultCityText/ResultCityText';
import { Text, Title, View } from '@components/common';
import { TabThreeParamList } from '@navigation/root/BottomTabNavigator';
import { allDestinations } from '@constants/destinations';
import { FavoriteCard } from '@components/common/FavoriteCard/FavoriteCard';
import { FavoriteCardCity } from '@components/common/FavoriteCardCity/FavoriteCardCity';
import { Destination } from '@models/Destination';
import { FavoriteCardParagraph } from '@components/common/FavoriteCardParagraph/FavoriteCardParagraph';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { QuizAnswerButton } from '@components/common/QuizAnswerButton/QuizAnswerButton';
import { removeDestination, setTemperaturePreference } from '@redux/quizSlice';
import { TemperaturePreference } from '@models/Quiz';
import { addFavoriteDestination } from '@redux/favoriteSlice';
import { FavoritePreference } from '@models/Favorit';

type Props = StackScreenProps<TabThreeParamList, 'TabThreeScreen'>;
export default function TabThreeScreen({ navigation }: Props) {
	const dispatch = useDispatch();
	const destinationResults = useSelector(
		(state: RootState) => state.quiz.destinationResults
	);
	const [mountainActive, setMountainActive] = useState(true);
	const [oceanActive, setOceanActive] = useState(true);
	const [cityActive, setCityActive] = useState(true);
	const [allActive, setAllActive] = useState(true);

	const filterMountains = () => {
		setMountainActive(true);
		setCityActive(false);
		setOceanActive(false);
		setAllActive(false);
	};
	const filterOceans = () => {
		setMountainActive(false);
		setCityActive(false);
		setOceanActive(true);
		setAllActive(false);
	};
	const filterCity = () => {
		setMountainActive(false);
		setCityActive(true);
		setOceanActive(false);
		setAllActive(false);
	};

	const filterAll = () => {
		setOceanActive(true);
		setMountainActive(true);
		setCityActive(true);
		setAllActive(true);
	};

	const filteredDestinations: Destination[] = destinationResults.filter(
		(destination) => {
			if (mountainActive && destination.hasMountain) {
				return true;
			}
			if (oceanActive && destination.hasOcean) {
				return true;
			}
			if (cityActive && destination.hasCity) {
				return true;
			}
			if (
				allActive &&
				destination.hasCity &&
				destination.hasOcean &&
				destination.hasMountain
			) {
				return true;
			}
			return false;
		}
	);

	const addDestinationToFavorites = (item: Destination) => {
		const newItem = {
			...item,
			favorite: FavoritePreference.Heart
		};
		dispatch(
			addFavoriteDestination(newItem)
		);
		dispatch(
			removeDestination(item)
		)
	};
	const disslikeDestination = (item: Destination) => {
		dispatch(
			removeDestination(item)
		)
	};

	return (
		<Container>
			<Title style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
				Vorschläge
			</Title>
			<Paragraph style={{ paddingLeft: '1.5rem' }}>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore
			</Paragraph>
			<View
				style={{
					flexDirection: 'row',
					paddingLeft: '1.5rem',
					paddingRight: '1.5rem',
					paddingBottom: '1.5rem'
				}}
			>
				<ResultCategorie onPress={filterAll}>Alle</ResultCategorie>
				<ResultCategorie onPress={filterMountains}>Berge</ResultCategorie>
				<ResultCategorie onPress={filterOceans}>Meer</ResultCategorie>
				<ResultCategorie onPress={filterCity}>Stadt</ResultCategorie>
			</View>

			<FlatList
				data={filteredDestinations}
				renderItem={({ item }) => (
					<View
						style={{

							padding: '2rem',
						}}
					>
						<Image
							source={item.image}
							style={{
								borderRadius: '10px',
								width: '15rem',
								height: '12rem',
								justifyContent: 'flex',
								padding: '2rem',
							}}
						/>
						<View
							style={{
								width: '12rem',
								flexDirection: 'column',
								justifyContent: 'space-around',
								paddingLeft: '1.5rem',
								paddingRight: '1.5rem'
							}}
						>
							<ResultCityText>{item.name}</ResultCityText>
							<View
								style={{
									minWidth: '12rem',
									flexDirection: 'row',
									justifyContent: 'space-between'

								}}
							>
								<QuizAnswerButton onPress={() => disslikeDestination(item)

								} selected={false}>
									<AntDesign
										style={{ marginTop: '2px' }}
										name='dislike2'
										color='white'
										size='30px'
									/>
								</QuizAnswerButton>
								<QuizAnswerButton onPress={() => addDestinationToFavorites(item)

								} selected={false}>
									<AntDesign
										style={{ marginTop: '2px' }}
										name='hearto'
										color='white'
										size='30px'
									/></QuizAnswerButton>
							</View>
						</View>
					</View>
				)}
			/>
		</Container>
	);
}

const Container = styled(View)`
	padding-left: 0rem;
	padding-right: 0rem;
	flex: 1;
`;
