import React, { Component } from 'react';
import styled from 'styled-components';
import fepic from './FE-landing.png';

const Kyh = styled.img`height: 100px;`;
const Kyh2 = styled.img`
	grid-area: kyh2;
	height: 200px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: kyh;
`;
const Container2 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: kyh2;
`;

export default class ImageGallery extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
					<Kyh src={fepic} alt="profile-picture" />
				</Container>
				<Container2>
					<Kyh2 src={fepic} alt="profile-picture" />
				</Container2>
			</React.Fragment>
		);
	}
}
