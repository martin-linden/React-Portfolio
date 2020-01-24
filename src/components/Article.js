import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	display: block;
	margin-top: 0;
	margin-bottom: 0;
	/* background-color: green; */
	color: #f65744;
	font-size: 50px;
	font-weight: 900;
`;
const Title2 = styled.h1`
	display: block;
	margin-top: 0;
	margin-bottom: 0;
	color: #2f4858;
	font-size: 50px;
	font-weight: 900;
`;

const TitleContainer = styled.div``;

const IntroText = styled.p`
	color: black;
	max-width: 350px;
	margin-top: 10px;
	margin-bottom: 10px;
	/* line-height: 150%;
	border-left: #2f4858 2px solid;
	padding-left: 10px;
	transform: translateX(-10px); */
`;

const LineContainer = styled.div``;

const Nav = styled.h4`
	font-weight: 600;
	/* content: ""; /* This is necessary for the pseudo element to work. */
	width: 30%; /* Change this to whatever width you want. */
	border-bottom: 2px solid #2f4858; /* This creates the border. Replace black with whatever color you want. */
	padding-bottom: 10px;
	color: #434343;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background: white; */
	grid-area: article;
`;

/* const Span = styled.span`color: #f65744;`; */

export default class Article extends Component {
	render() {
		return (
			<Container>
				<TitleContainer>
					<Title>FRONT-END</Title>
					<Title2>DEVELOPER</Title2>
					<LineContainer>
						<IntroText>
							Welcome! Please have a look around and see some
							of my projects. dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolor
						</IntroText>
						<Nav>PROJECTS</Nav>
					</LineContainer>
				</TitleContainer>
			</Container>
		);
	}
}
