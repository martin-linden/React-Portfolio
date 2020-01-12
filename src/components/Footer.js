import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background: pink;
	grid-area: footer;
`;

export default class Footer extends Component {
	render() {
		return <Container />;
	}
}
