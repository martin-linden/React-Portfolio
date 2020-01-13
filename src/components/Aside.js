import React, { Component } from 'react';
import styled from 'styled-components';

/* const Links = styled.p`color: black;`; */

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	grid-area: aside;
`;

export default class Aside extends Component {
	render() {
		return <Container />;
	}
}
