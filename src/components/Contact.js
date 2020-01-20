import React, { Component } from 'react';
import styled from 'styled-components';

/* const Links = styled.p`color: black;`; */

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	grid-area: aside;
`;

export default class Contact extends Component {
	render() {
		return (
			<Container>
				<Form>Name</Form>
			</Container>
		);
	}
}
