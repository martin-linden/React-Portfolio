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
	background: white;
`;

export default class Footer extends Component {
	render() {
		return (
			<Container>
				<Links>
					<a href="https://github.com/martin-linden">
						GITHUB <span />
					</a>
				</Links>
				<Links>
					<a href="https://www.linkedin.com/in/martinlindensthlm/?locale=sv_SE">
						LINKEDIN
					</a>
				</Links>
				<Text>BACK TO LANDING</Text>
			</Container>
		);
	}
}
