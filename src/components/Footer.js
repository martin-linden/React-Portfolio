import React, { Component } from 'react';
import styled from 'styled-components';

const Links = styled.a`
	color: black;
	text-decoration: none;
`;

const Text = styled.p`
	text-decoration: underline;
	text-decoration-color: #f65744;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	grid-area: footer;
	font-weight: 400;
`;

export default class Footer extends Component {
	render() {
		return (
			<Container>
				<Links href="https://github.com/martin-linden">
					GITHUB <span />
				</Links>

				<Links href="https://www.linkedin.com/in/martinlindensthlm/?locale=sv_SE">
					LINKEDIN
				</Links>

				<Text>BACK TO LANDING</Text>
			</Container>
		);
	}
}
