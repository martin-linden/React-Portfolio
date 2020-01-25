import React, { Component } from 'react';
import styled from 'styled-components';

const FirstTitle = styled.h1`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: white;
	color: #868686;
	font-size: 40px;
	font-weight: 900;
	padding: 1%;
`;

const Title = styled.h1`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: white;
	color: #2f4858;
	font-size: 70px;
	font-weight: 900;
	padding: 1%;
`;

const Title2 = styled.h1`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: white;
	color: #f65744;
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
	grid-area: intro2;
`;

export default class Intro2 extends Component {
	render() {
		return (
			<Container>
				<TextContainer>
					<FirstTitle>& I am a </FirstTitle>
					<Title>Front-end</Title>
					<Title2>Developer</Title2>
				</TextContainer>
			</Container>
		);
	}
}
