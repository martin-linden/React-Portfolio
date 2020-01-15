import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	color: black;
	font-size: 300%;
	margin-bottom: 0;
`;

const IntroText = styled.p`
	color: black;
	max-width: 250px;
`;

const Lines = styled.hr`
	color: #f65744;
	transform: rotate(45deg);
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: white;
	grid-area: article;
`;

export default class Article extends Component {
	render() {
		return (
			<Container>
				<Title>
					Front-end
					<br />
					developer
				</Title>
				<IntroText>
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et
					dolor
				</IntroText>
				<hr />
			</Container>
		);
	}
}
