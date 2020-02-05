import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	display: block;
	margin-top: 0;
	margin-bottom: 0;
	color: #f65744;
	font-size: 70px;
	font-weight: 300;
	@media (max-width: 720px) {
		//medium-screen
		font-size: 45px;
	}
`;
const Title2 = styled.h1`
	display: block;
	margin-top: 0;
	margin-bottom: 0;
	color: #2f4858;
	font-size: 70px;
	font-weight: 300;
	@media (max-width: 720px) {
		//medium-screen
		font-size: 45px;
	}
`;

const TitleContainer = styled.div`
	border-left: #2f4858 2px solid;
	padding-left: 15px;
	/* transform: translateX(-10px); */
`;
const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

const IntroText = styled.p`
	color: black;
	max-width: 350px;
	margin-top: 10px;
	margin-bottom: 10px;
	line-height: 150%;
	border-left: #2f4858 2px solid;
	padding-left: 10px;
	transform: translateX(-10px);
`;

const Nav = styled.h4`
	font-weight: 600;
	margin-top: 15px;
	/* content: ""; /* This is necessary for the pseudo element to work. */
	width: 30%; /* Change this to whatever width you want. */
	border-bottom: 2px solid #2f4858; /* This creates the border. Replace black with whatever color you want. */
	padding-bottom: 5px;
	color: #434343;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background: white; */
	grid-area: article;

	@media (max-width: 720px) {
	}
`;

/* const Span = styled.span`color: #f65744;`; */

export default class Article extends Component {
	render() {
		return (
			<Container>
				<TextContainer>
					<TitleContainer>
						<Title>Front-End</Title>
						<Title2>Developer</Title2>
					</TitleContainer>
					<Nav>PROJECTS</Nav>
				</TextContainer>
			</Container>
		);
	}
}
