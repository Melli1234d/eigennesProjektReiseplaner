import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="AlleScreen" component={AlleScreen} />
			<Tab.Screen name="BergeScreen" component={BergeScreen} />
			<Tab.Screen name="StadtScreen" component={StadtrScreen} />
			<Tab.Screen name="MeerScreen" component={MeerScreen} />
		</Tab.Navigator>
	);
}
