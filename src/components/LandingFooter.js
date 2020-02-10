import React, { Component } from 'react';
import styled from 'styled-components';
import Weather from '../components/Weather';

const City = styled.p`color: #f65744;`;
const Country = styled.p`
	color: black;
	margin-top: 1%;
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	grid-area: landingFooter;
	margin-right: 5%;
	font-weight: 500;

	@media (max-width: 510px) {
		//small-screen
		align-items: center;
	}
`;

export default class LandingFooter extends Component {
	render() {
		return (
			<Container>
				<City>
					STOCKHOLM, <Country>SWEDEN</Country>
					<Weather />
				</City>
			</Container>
		);
	}
}
