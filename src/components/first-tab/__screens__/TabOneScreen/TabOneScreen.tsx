import * as React from 'react';
import styled from 'styled-components/native';

import EditScreenInfo from '@components/common/EditScreenInfo/EditScreenInfo';
import { Title, View } from '@components/common';

export default function TabOneScreen() {
	return (
		<View centerContent>
			<Title>Tab One</Title>
			<Seperator lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}

const Seperator = styled(View)`
	margin-vertical: 30px;
	height: 1px;
	width: 80%;
`;
