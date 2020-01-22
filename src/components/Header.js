import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Logo = styled.img`
	display: flex;
	justify-content: flex-start;
	height: 50px;
	margin-left: 2%;
`;

const Styledlink = styled(Link)`color: black;
text-decoration: none;
margin-right: 10%`;

const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-area: header;
	background: white;
	font-weight: 400;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-area: header;
	background: white;
	margin-right: 5%;
`;

export default class Header extends Component {
	render() {
		return (
			<Container>
				<Logo src={logo} alt="test" />
				<LinkContainer>
					<Styledlink to="/contact">PROJECTS</Styledlink>
					<Styledlink to="/contact">CONTACT</Styledlink>
				</LinkContainer>
			</Container>
		);
	}
}
