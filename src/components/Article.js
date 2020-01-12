import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background: yellow;
	grid-area: article;
`;

export default class Article extends Component {
	render() {
		return <Container />;
	}
}
