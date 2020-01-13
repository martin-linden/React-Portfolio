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

export default class Header extends Component {
	render() {
		return (
			<Container>
				<Logo src={logo} alt="test" />
				<Link to="/contact">CONTACT</Link>
			</Container>
		);
	}
}
