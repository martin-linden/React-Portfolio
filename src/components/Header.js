import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import { NavLink as Link } from 'react-router-dom';

const Logo = styled.img`
	display: flex;
	justify-content: flex-start;
	height: 50px;
	margin-left: 18px;
`;

const Styledlink = styled(Link)`
color: ${(props) => props.theme.secondaryColor};
text-decoration: none;
margin-right: 10px;
&:hover {
	/* background-color: ${(props) => props.theme.secondaryColor}; */
	opacity: 60%
	padding: 1%;
	color: black;
}
&.active {
	opacity: 100%;
	text-decoration: underline;
	color: ${(props) => props.theme.secondaryColor};
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
	flex-direction: row;
	justify-content: center;
	align-items: center;
	justify-content: space-between;
	min-height: 12vh;
`;

/* const Grid = styled.div`
	grid-column-start: 1;
	grid-column-end: -1;
	grid-row-start: 1;
	grid-row-end: 2;
`; */

export default class Header extends Component {
	render() {
		return (
			<Container>
				<Logo src={logo} alt="logotype" />
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
