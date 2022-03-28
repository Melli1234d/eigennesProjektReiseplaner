import {
	Ionicons,
	AntDesign,
	MaterialCommunityIcons
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import styled from 'styled-components/native';

import themes from '@constants/themes';
import useColorScheme from '@hooks/useColorScheme';
import TabTwoScreen from '@components/second-tab/__screens__/TabTwoScreen/TabTwoScreen';
import TabOneScreen from '@components/first-tab/__screens__/TabOneScreen/TabOneScreen';
import TravelQuizScreen from '@components/first-tab/__screens__/TravelQuizScreen/TravelQuizScreen';
import QuestionTwoScreen from '@components/first-tab/__screens__/QuestionTwoScreen/QuestionTwoScreen';
import VenedigDetailScreen from '@components/second-tab/__screens__/VenedigDetailScreen/VenedigDetailScreen';
import MykonosDetailScreen from '@components/second-tab/__screens__/MykonosDetailScreen/MykonosDetailScreen';
import TabThreeScreen from '@components/third-tab/__screens__/TabThreeScreen/TabThreeScreen';
import AmsterdamDetailScreen from '@components/second-tab/__screens__/AmsterdamDetailScreen/AmsterdamDetailScreen';
import BarcelonaDetailScreen from '@components/second-tab/__screens__/BarcelonaDetailScreen/BarcelonaDetailScreen';
import BelgienDetailScreen from '@components/second-tab/__screens__/BelgienDetailScreen/BelgienDetailScreen';
import BieszczadyDetailScreen from '@components/second-tab/__screens__/BieszczadyDetailScreen/BieszczadyDetailScreen';
import BudapestDetailScreen from '@components/second-tab/__screens__/BudapestDetailScreen/BudapestDetailScreen';
import JamaikaDetailScreen from '@components/second-tab/__screens__/JamaikaDetailScreen/JamaikaDetailScreen';
import KeniaDetailScreen from '@components/second-tab/__screens__/KeniaDetailScreen/KeniaDetailScreen';
import MiamiBeachDetailScreen from '@components/second-tab/__screens__/MiamiBeachDetailScreen/MiamiBeachDetailScreen';
import ModeiraDetailScreen from '@components/second-tab/__screens__/ModeiraDetailScreen/ModeiraDetailScreen';
import MombasaDetailScreen from '@components/second-tab/__screens__/MombasaDetailScreen/MombasaDetailScreen';
import ParisDetailScreen from '@components/second-tab/__screens__/ParisDetailScreen/ParisDetailScreen';
import RotterdammDetailScreen from '@components/second-tab/__screens__/RotterdammDetailScreen/RotterdammDetailScreen';
import RuegenDetailScreen from '@components/second-tab/__screens__/RuegenDetailScreen/RuegenDetailScreen';
import SalalahDetailScreen from '@components/second-tab/__screens__/SalalahDetailScreen/SalalahDetailScreen';
import SingapurDetailScreen from '@components/second-tab/__screens__/SingapurDetailScreen/SingapurDetailScreen';
import VancouverDetailScreen from '@components/second-tab/__screens__/VancouverDetailScreen/VancouverDetailScreen';

export type BottomTabParamList = {
	TabOne: undefined;
	TabTwo: undefined;
	TabThree: undefined;
};

export type TabOneParamList = {
	TabOneScreen: undefined;
	TravelQuizScreen: undefined;
	QuestionTwoScreen: undefined;
	TabThreeScreen: undefined;
};

export type TabTwoParamList = {
	TabTwoScreen: undefined;
	VenedigDetailScreen: undefined;
	MykonosDetailScreen: undefined;
	AmsterdammDetailScreen: undefined;
	BarcelonaDetailScreen: undefined;
	BelgienDetailScreen: undefined;
	BieszczadyDetailScreen: undefined;
	BudapestDetailScreen: undefined;
	JamaikaDetailScreen: undefined;
	KeniaDetailScreen: undefined;
	MiamiBeachDetailScreen: undefined;
	ModeiraDetailScreen: undefined;
	MombasaDetailScreen: undefined;
	ParisDetailScreen: undefined;
	RotterdammDetailScreen: undefined;
	RuegenDetailScreen: undefined;
	SalalahDetailScreen: undefined;
	SingapurDetailScreen: undefined;
	VanvouverDetailScreen: undefined;
};
export type TabThreeParamList = {
	TabThreeScreen: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			screenOptions={{ tabBarActiveTintColor: themes[colorScheme].tint ,headerShown: false}}
		>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="planet" size={24} color={color} />
					),
					title: 'Check'
				}}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name="heart" size={24} color={color} />
					),
					title: 'Favoriten',
				}}
			/>
			<BottomTab.Screen
				name="TabThree"
				component={TabThreeNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="clipboard-check"
							size={24}
							color={color}
						/>
					),
					title: 'Vorschläge'
				}}
			/>
		</BottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
	return <StyledIonIcon size={30} {...props} />;
}

const StyledIonIcon = styled(Ionicons)`
	margin-bottom: -3px;
`;

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
	return (
		<TabOneStack.Navigator>
			<TabOneStack.Screen
				name="TabOneScreen"
				component={TabOneScreen}
				options={{ headerShown: false }}
			/>
			<TabOneStack.Screen
				name="TravelQuizScreen"
				component={TravelQuizScreen}
				options={{ headerShown: false }}
			/>
			<TabOneStack.Screen
				name="QuestionTwoScreen"
				component={QuestionTwoScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="BarcelonaDetailScreen"
				component={MykonosDetailScreen}
				options={{ headerShown: false }}
			/>
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
	// @ts-ignore
	// @ts-ignore
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name="TabTwoScreen"
				component={TabTwoScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="VenedigDetailScreen"
				component={VenedigDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="MykonosDetailScreen"
				component={MykonosDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="AmsterdamDetailScreen"
				component={AmsterdamDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="BarcelonaDetailScreen"
				component={BarcelonaDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="BelgienDetailScreen"
				component={BelgienDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="BieszczadyDetailScreen"
				component={BieszczadyDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="BudapestDetailScreen"
				component={BudapestDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="JamaikaDetailScreen"
				component={JamaikaDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="KeniaDetailScreen"
				component={KeniaDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="MiamiBeachDetailScreen"
				component={MiamiBeachDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="ModeiraDetailScreen"
				component={ModeiraDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="MombasaDetailScreen"
				component={MombasaDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="ParisDetailScreen"
				component={ParisDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="RotterdammDetailScreen"
				component={RotterdammDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="RuegenDetailScreen"
				component={RuegenDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="SalalahDetailScreen"
				component={SalalahDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="SingapurDetailScreen"
				component={SingapurDetailScreen}
				options={{ headerShown: false }}
			/>
			<TabTwoStack.Screen
				name="VancouverDetailScreen"
				component={VancouverDetailScreen}
				options={{ headerShown: false }}
			/>
		</TabTwoStack.Navigator>
	);
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
	return (
		<TabThreeStack.Navigator>
			<TabThreeStack.Screen
				name="TabThreeScreen"
				component={TabThreeScreen}
				options={{ headerShown: false }}
			/>
		</TabThreeStack.Navigator>
	);
}
