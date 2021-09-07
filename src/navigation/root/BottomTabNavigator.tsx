import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import styled from 'styled-components/native';

import themes from '@constants/themes';
import useColorScheme from '@hooks/useColorScheme';
import TabTwoScreen from '@components/second-tab/__screens__/TabTwoScreen/TabTwoScreen';
import TabOneScreen from '@components/first-tab/__screens__/TabOneScreen/TabOneScreen';

export type BottomTabParamList = {
	TabOne: undefined;
	TabTwo: undefined;
};

export type TabOneParamList = {
	TabOneScreen: undefined;
};

export type TabTwoParamList = {
	TabTwoScreen: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			screenOptions={{ tabBarActiveTintColor: themes[colorScheme].tint }}
		>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="ios-code" color={color} />
					)
				}}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="ios-code" color={color} />
					)
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
				options={{ headerTitle: 'Tab One Title' }}
			/>
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name="TabTwoScreen"
				component={TabTwoScreen}
				options={{ headerTitle: 'Tab Two Title' }}
			/>
		</TabTwoStack.Navigator>
	);
}
