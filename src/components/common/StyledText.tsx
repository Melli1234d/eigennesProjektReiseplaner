import * as React from 'react';
import styled from 'styled-components/native';

import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
	return <StyledText {...props} style={props.style} />;
}

const StyledText = styled(Text)`
	font-family: space-mono;
`;
