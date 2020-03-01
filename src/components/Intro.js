import React, { Component } from 'react';
import styled from 'styled-components';

const FirstTitle = styled.h1`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: #868686;
	color: white;
	font-size: 45px;
	padding: 1%;
	padding-left: 10px;
	padding-right: 10px;
	font-weight: 300;
	@media (max-width: 720px) {
		//medium-screen
		font-size: 30px;
	}
	@media (max-width: 510px) {
		//small-screen
		/* font-size: 20px; */
	}
`;
const FirstTitle2 = styled.h1`
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: #f0715e;
	color: white;
	font-size: 45px;
	padding: 1%;
	padding-left: 10px;
	padding-right: 10px;
	margin-left: 10px;
	font-weight: 300;
	@media (max-width: 720px) {
		//medium-screen
		font-size: 30px;
	}
	@media (max-width: 510px) {
		//small-screen
		/* font-size: 20px; */
	}
`;

const FirstTitleContainer = styled.div`display: flex;`;

const Title = styled.h1`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: ${(props) => props.theme.secondaryColor};
	color: white;
	font-size: 75px;
	padding: 1%;
	padding-left: 10px;
	padding-right: 10px;
	font-weight: 300;
	@media (max-width: 720px) {
		//medium-screen
		font-size: 60px;
	}
`;

const Title2 = styled.h1`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: ${(props) => props.theme.primaryColor};
	color: white;
	font-size: 75px;
	padding: 1%;
	padding-left: 10px;
	padding-right: 10px;
	font-weight: 300;
	@media (max-width: 720px) {
		//medium-screen
		font-size: 60px;
	}
`;
const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;
const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 720px) {
		//phone
		align-items: center;
	}
`;

const Grid = styled.div`
	grid-column-start: 4;
	grid-column-end: 4;
	grid-row-start: 5;
	grid-row-end: 5;
	@media (max-width: 610px) {
		//phone
		grid-column-start: 2;
		grid-column-end: 10;
		grid-row-start: 2;
		grid-row-end: 2;
	}
`;

export default class Intro extends Component {
	render() {
		return (
			<Grid>
				<Container>
					<TextContainer>
						<FirstTitleContainer>
							<FirstTitle>Hi! </FirstTitle>
							<FirstTitle2>I'm </FirstTitle2>
						</FirstTitleContainer>
						<Title>Martin</Title>
						<Title2>Lindén</Title2>
					</TextContainer>
				</Container>
			</Grid>
		);
	}
}
