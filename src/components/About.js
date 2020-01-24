import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMe from './about.svg';

const Title = styled.h3`
	color: #2f4858;
	margin-bottom: 10px;
`;

const Text = styled.p`
	color: black;
	max-width: 350px;
	/* line-height: 150%;
	border-left: #f65744 2px solid;
	padding-left: 10px; */
`;

const Picture = styled.img`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	height: 80%;
`;
const PictureContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	grid-area: picture;
`;

const TextLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	grid-area: about;
`;

export default class About extends Component {
	render() {
		return (
			<React.Fragment>
				<TextContainer>
					<TextLayout>
						<Title>PROJECTS</Title>
						<Text>
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum
							dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa
							qui officia deserunt mollit anim id est
							laborum.
						</Text>
					</TextLayout>
				</TextContainer>
				<PictureContainer>
					<Picture src={AboutMe} />
				</PictureContainer>
			</React.Fragment>
		);
	}
}
