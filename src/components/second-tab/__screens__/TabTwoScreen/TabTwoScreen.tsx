import * as React from 'react';
import styled from 'styled-components/native';

import { Title, View } from '@components/common';
import EditScreenInfo from '@components/common/EditScreenInfo/EditScreenInfo';

export default function TabTwoScreen() {
	return (
		<View centerContent>
			<Title>Tab Two</Title>
			<Separator lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabTwoScreen.tsx" />
		</View>
	);
}

const Separator = styled(View)`
	margin-top: 30px;
	margin-bottom: 30px;
	height: 1px;
	width: 80%;
`;
