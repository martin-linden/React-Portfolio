import React, { Component } from 'react';
import styled from 'styled-components';

/* const NavBar = styled.h6`color: white;`; */

const Container = styled.div`
	background: green;
	grid-area: main;
`;

export default class Main extends Component {
	render() {
		return <Container />;
	}
}
