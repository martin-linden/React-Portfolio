import React, { Component } from 'react';
import styled from 'styled-components';
import './img/logo.svg';

/* const Title = styled.h1`
	font-size: 300%;
	margin-bottom: 0%;
	color: white;
`; */

/* const Text = styled.p`
	color: white;
	margin-top: 1%;
	max-width: 300px;
`; */

const Container = styled.div`
	padding: 10%;
	grid-area: header;
	background: blue;
`;

export default class Header extends Component {
	render() {
		return <Container />;
	}
}
