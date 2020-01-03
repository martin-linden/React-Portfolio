import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	display: flex;
	justify-content: center;
	color: orange;
	margin-top: 0px;
`;
const Button = styled.button`
	display: flex;
	justify-content: center;
	background: red;
`;

export default class Header extends Component {
	render() {
		return (
			<div>
				<Title>Test Header</Title>
				<Button>Hello</Button>
			</div>
		);
	}
}
