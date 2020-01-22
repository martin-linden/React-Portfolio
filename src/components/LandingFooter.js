import React, { Component } from 'react';
import styled from 'styled-components';

const City = styled.p`color: #f65744;`;
const Country = styled.p`
	color: black;
	margin-top: 1%;
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	background: white;
	grid-area: landingFooter;
	margin-right: 5%;
	font-weight: 400;
`;

export default class LandingFooter extends Component {
	render() {
		return (
			<Container>
				<City>
					STOCKHOLM, <Country>SWEDEN</Country>
				</City>
			</Container>
		);
	}
}
