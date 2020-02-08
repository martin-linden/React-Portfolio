import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import { NavLink as Link } from 'react-router-dom';

const Logo = styled.img`
	display: flex;
	justify-content: flex-start;
	height: 50px;
	margin-left: 2%;
`;

const Styledlink = styled(Link)`
opacity: 80%
color: black;
text-decoration: none;
&:hover {
	background-color: #2f4858;
	color: white;
	padding: 1%;
}
&.active {
	opacity: 100%;
	text-decoration: underline;
	color: white
	background: #f65744; 
	padding: 1%;
}
`;

const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-area: header;
	font-weight: 400;
	margin-right: 2%;
`;

const Container = styled.div`
	/* position: fixed;
	top: 25px;
	left: 0;
	right: 0; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-area: header;
`;

export default class Header extends Component {
	render() {
		return (
			<Container>
				<Logo src={logo} alt="test" />
				<LinkContainer>
					<Styledlink to="/" exact>
						HOME
					</Styledlink>
					<Styledlink to="/contact" exact>
						CONTACT
					</Styledlink>
				</LinkContainer>
			</Container>
		);
	}
}
