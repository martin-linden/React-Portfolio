import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Logo = styled.img`
	height: 40px;
	margin-left: 2%;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-area: header;
	background: white;
`;

const Styledlink = styled(Link)`color: #f65744;
margin-right: 5%;
text-decoration: none;`;

export default class Header extends Component {
	render() {
		return (
			<Container>
				<Logo src={logo} alt="test" />
				<Styledlink to="/contact">CONTACT</Styledlink>
			</Container>
		);
	}
}
