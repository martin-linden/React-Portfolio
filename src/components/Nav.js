import React, { Component } from 'react';
import styled from 'styled-components';

const NavBar = styled.h6`
	color: white;
	display: grid;
	justify-items: center;
	align-items: start;
`;

const NavLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(3em, 1fr));
	/* background: blue; */
	grid-area: box1;
`;

export default class Nav extends Component {
	render() {
		return (
			<NavLayout>
				<NavBar>Home</NavBar>
				<NavBar>Galleries</NavBar>
				{/* <NavBar>Blog</NavBar> */}
				<NavBar>Profile</NavBar>
			</NavLayout>
		);
	}
}
