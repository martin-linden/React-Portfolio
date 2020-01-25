import React, { Component } from 'react';
import styled from 'styled-components';
import fepic from './FE-landing.png';

const Kyh = styled.img`grid-area: kyh;`;
const Kyh2 = styled.img`grid-area: kyh2;`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default class ImageGallery extends Component {
	render() {
		return (
			<Container>
				<Kyh src={fepic} alt="profile-picture" />
				<Kyh2 src={fepic} alt="profile-picture" />
			</Container>
		);
	}
}
