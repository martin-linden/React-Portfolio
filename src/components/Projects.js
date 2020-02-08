import React, { Component } from 'react';
import styled from 'styled-components';
import computer from '../images/projects.svg';

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
	height: 370px;
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

export default class Projects extends Component {
	render() {
		return (
			<React.Fragment>
				<TextContainer>
					<TextLayout>
						<Title>PROJECT IMAGE GALLERY (In progress)</Title>
						<Text>
							{/* Below is a image gallery of my existing
							projects. */}
						</Text>
					</TextLayout>
				</TextContainer>
				<PictureContainer>
					<Picture src={computer} />
				</PictureContainer>
			</React.Fragment>
		);
	}
}
