import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { FlatList, Image, ImageBackground, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

import { FavoriteCard } from '@components/common/FavoriteCard/FavoriteCard';
import { Title, View } from '@components/common';
import useColorScheme from '@hooks/useColorScheme';
import { TabOneParamList } from '@navigation/root/BottomTabNavigator';
import { FavoriteCardCity } from '@components/common/FavoriteCardCity/FavoriteCardCity';
import { Paragraph } from '@components/common/Paragraph/Paragraph';
import { ResultCategorie } from '@components/common/ResultCategorie/ResultCategorie';
import { allDestinations } from '@constants/destinations';
import { Destination } from '@models/Destination';
import { TextBackgroundOverlay } from '@components/common/TextBackroundOverlay/TextBackgroundOverlay';
import {
	FavoriteCardParagraph,
	FavoriteCardParagraphProps
} from '@components/common/FavoriteCardParagraph/FavoriteCardParagraph';
import { FavoriteDestination } from '@models/Favorit';

type Props = StackScreenProps<TabOneParamList, 'TabTwoScreen'>;
export default function TabTwoScreen({ navigation }: Props) {
	const destinationResults = useSelector(
		(state: RootState) => state.favorite.destinationResults
	);
	const colorScheme = useColorScheme();
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
		(destination: FavoriteDestination) => {
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

	return (
		<Container>
			<Title>Favoriten</Title>
			<View style={{ flexDirection: 'row' }}>
				<ResultCategorie onPress={filterAll}>Alle</ResultCategorie>
				<ResultCategorie onPress={filterMountains}>Berge</ResultCategorie>
				<ResultCategorie onPress={filterOceans}>Meer</ResultCategorie>
				<ResultCategorie onPress={filterCity}>Stadt</ResultCategorie>
			</View>

			<FlatList
				data={filteredDestinations}
				renderItem={({ item }) => (
					<FavoriteCard onPress={() => navigation.navigate(item.link)}>
						<ImageBackground
							source={item.image}
							imageStyle={{ borderRadius: '10px', height: '10rem' }}
						>
							<FavoriteCardCity>{item.name}</FavoriteCardCity>
							<FavoriteCardParagraph>{item.text} </FavoriteCardParagraph>
						</ImageBackground>
					</FavoriteCard>
				)}
			/>
		</Container>
	);
}

const Container = styled(View)`
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	flex: 1;
`;
