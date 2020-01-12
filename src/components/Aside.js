import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background: red;
	grid-area: aside;
`;

export default class Aside extends Component {
	render() {
		return <Container />;
	}
}
