import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Text, Title, View } from '@components/common';
import { RootStackParamList } from '@navigation/root';

export default function NotFoundScreen({
	navigation
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
	return (
		<ViewContainer centerContent>
			<Title>This screen doesn't exist.</Title>
			<TouchableLink onPress={() => navigation.replace('Root')}>
				<TextLink>Go to home screen!</TextLink>
			</TouchableLink>
		</ViewContainer>
	);
}

const ViewContainer = styled(View)`
	background-color: #fff;
	padding: 20px;
`;

const TouchableLink = styled(TouchableOpacity)`
	margin-top: 15px;
	padding-top: 15px;
	padding-bottom: 15px;
`;
const TextLink = styled(Text)`
	font-size: 14px;
	color: #2e78b7;
`;
