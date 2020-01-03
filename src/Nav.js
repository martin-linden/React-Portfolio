import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
	display: flex;
	justify-content: flex-end;
	font-size: 1.5em;
	color: lightblue;
`;

export default class Nav extends Component {
	render() {
		return (
			<div>
				<Title>Test</Title>
				<Title>Test</Title>
			</div>
		);
	}
}
