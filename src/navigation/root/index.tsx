// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import BottomTabNavigator from '@navigation/root/BottomTabNavigator';
import NotFoundScreen from '@components/common/__screens__/NotFoundScreen/NotFoundScreen';

export type RootStackParamList = {
	Root: undefined;
	NotFound: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Root" component={BottomTabNavigator} />
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
		</Stack.Navigator>
	);
}
