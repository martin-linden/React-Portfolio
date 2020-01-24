import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMe from './about.svg';

const Title = styled.h1`
	color: #f65744;
	font-size: 60px;
	font-weight: 900;
`;

const Text = styled.p`color: black;`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	grid-area: contact;
`;

const Picture = styled.img`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	height: 80%;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: pic;
`;

export default class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
					<Picture src={AboutMe} />
				</Container>
				<TextContainer>
					<Title>Hi there!</Title>
					<Text>Check out my github here:</Text>
				</TextContainer>
			</React.Fragment>
		);
	}
}
