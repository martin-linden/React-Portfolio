import React, { Component } from 'react';
import styled from 'styled-components';
import Weather from '../components/Weather';

const City = styled.div`
	color: ${(props) => props.theme.primaryColor};
	display: inline-block;
`;
const Country = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: black;
	margin-top: 1%;
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	margin-right: 5%;
	font-weight: 500;

	@media (max-width: 510px) {
		//small-screen
		align-items: center;
	}
`;

const Grid = styled.div`
	grid-column-start: 1;
	grid-column-end: -1;
	grid-row-start: 9;
	grid-row-end: 9;
`;

export default class LandingFooter extends Component {
	render() {
		return (
			<Grid>
				<Container>
					<City>
						STOCKHOLM,
						<Country>
							SWEDEN <Weather />
						</Country>
					</City>
				</Container>
			</Grid>
		);
	}
}
