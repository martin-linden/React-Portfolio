import React, { Component } from 'react';
import styled from 'styled-components';

const FirstTitle = styled.h1`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: #868686;
	color: white;
	font-size: 40px;
	font-weight: 900;
	padding: 1%;
`;

const Title = styled.h1`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: #2f4858;
	color: white;
	font-size: 70px;
	font-weight: 900;
	padding: 1%;
`;

const Title2 = styled.h1`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: #f65744;
	color: white;
	font-size: 70px;
	font-weight: 900;
	padding: 1%;
`;
const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	grid-area: intro;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	grid-area: intro;
`;

export default class Intro extends Component {
	render() {
		return (
			<Container>
				<TextContainer>
					<FirstTitle>I AM</FirstTitle>
					<Title>MARTIN</Title>
					<Title2>LINDÉN</Title2>
				</TextContainer>
			</Container>
		);
	}
}
