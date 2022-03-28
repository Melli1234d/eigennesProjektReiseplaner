import { Text } from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

export type ParagraphProps = Text['props'];
export const Paragraph = (props: ParagraphProps) => {
	return <ParagraphStyle {...props} />;
};

const ParagraphStyle = styled(Text)`
	color: #969292;
	background-color: white;
	margin-bottom: 0.5rem;
	font-size: 12pt;
	max-width: 15rem;
	text-align: left;
`;
