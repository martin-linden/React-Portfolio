import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	color: black;
	font-size: 350%;
	margin-bottom: 0;
	font-weight: 400;
`;

const TitleContainer = styled.div``;

const IntroText = styled.p`
	color: black;
	max-width: 400px;
	line-height: 150%;
	border-left: #f65744 2px solid;
	padding-left: 15px;
	transform: translateX(-15px);
`;

const LineContainer = styled.div``;

const Nav = styled.h4`
	font-weight: 600;
	content: ""; /* This is necessary for the pseudo element to work. */
	width: 30%; /* Change this to whatever width you want. */
	border-bottom: 2px solid #f65744; /* This creates the border. Replace black with whatever color you want. */
	padding-bottom: 15px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: white;
	grid-area: article;
`;

const Span = styled.span`color: #f65744;`;

export default class Article extends Component {
	render() {
		return (
			<Container>
				<TitleContainer>
					<Title>
						<Span>Front</Span>-end developer
					</Title>
					<LineContainer>
						<IntroText>
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolorLorem ipsum dolor
							sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolor
						</IntroText>
						<Nav>READ MORE</Nav>
					</LineContainer>
				</TitleContainer>
			</Container>
		);
	}
}
