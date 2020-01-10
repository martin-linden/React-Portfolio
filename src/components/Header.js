import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 300%;
	margin-bottom: 0%;
	color: white;
`;

const Text = styled.p`
	color: white;
	margin-top: 1%;
	max-width: 300px;
`;

const Container = styled.div`
	display: grid;
	align-items: center;
	padding: 10%;
	/* grid-area: box1; */
	/* background: gray; */
`;

export default class Header extends Component {
	render() {
		return (
			<div>
				<Container>
					<Title>Martin</Title>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et
					</Text>
				</Container>
			</div>
		);
	}
}
