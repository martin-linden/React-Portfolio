import React, { Component } from 'react';
import styled from 'styled-components';
import profile from './Asset1.svg';

const Profile = styled.img`height: 70%;`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: main;
`;

export default class Main extends Component {
	render() {
		return (
			<Container>
				<Profile src={profile} alt="profile-picture" />
			</Container>
		);
	}
}
