import React, { Component } from 'react';
import styled from 'styled-components';
import profile from './profile.svg';

const Profile = styled.img`height: 80%;`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
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
