import React, { Component } from 'react';
import styled from 'styled-components';
import Weather from '../components/Weather';

const City = styled.div`
	color: ${(props) => props.theme.secondaryColor};
	display: inline-block;
`;
const Country = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: ${(props) => props.theme.secondaryColor};
	margin-top: 1%;
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	margin-right: 5%;
	font-weight: 500;
	z-index: 1;

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

	@media (max-width: 610px) {
		//phone
		grid-column-start: 1;
		grid-column-end: -1;
		grid-row-start: 8;
		grid-row-end: 8;
	}
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
