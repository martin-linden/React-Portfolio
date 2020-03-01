import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMe from '../images/about.png';

const Title = styled.h1`
	color: ${(props) => props.theme.primaryColor};
	font-size: 60px;
	font-weight: 900;
	margin-bottom: 5%;
`;

const Text = styled.div`
	color: black;
	max-width: 400px;

	@media (max-width: 780px) {
		max-width: 400px;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	grid-area: contact;
`;

const MainContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: contact;
	padding: 3%;
`;

const Picture = styled.img`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	height: 500px;

	@media (max-width: 780px) {
		//medium-screen
		display: none;
		pointer-events: none;
	}
`;

const TextArea = styled.div`
	margin-bottom: 4%;
	font-size: 17px;
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 780px) {
		//medium-screen
		display: none;
		pointer-events: none;
	}
`;

const Links = styled.a`
	color: darkblue;
	text-decoration: none;
	font-weight: 600;
`;
const Span = styled.span`
	display: block;
	margin-top: 1%;
	max-width: 400px;
`;

const Grid = styled.div`
	grid-column-start: 1;
	grid-column-end: -1;
	grid-row-start: 5;
	grid-row-end: 5;
	@media (max-width: 780px) {
		//medium-screen
		grid-column-start: 2;
		grid-column-end: 10;
		grid-row-start: 1;
		grid-row-end: 9;
	}
`;

const FlexWrpper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;

export default class Contact extends Component {
	render() {
		return (
			<Grid>
				<FlexWrpper>
					<Container>
						<Picture
							src={AboutMe}
							alt="Martin standing on a mountain"
						/>
					</Container>
					<MainContainer>
						<TextContainer>
							<Title>Hej!</Title>
							<TextArea>
								<Text>
									I'm a front-end developer from
									Stockholm, Sweden currently studying at
									KYH. Passionate about developing smart
									and good looking solutions for the web.
								</Text>
							</TextArea>
							<TextArea>
								<Text>
									Check out my github here:
									<Span>
										<Links href="https://github.com/martin-linden">
											github.com/martin-linden
										</Links>
									</Span>
								</Text>
							</TextArea>
							<TextArea>
								Hard Skills - HTML, CSS, JS, React{' '}
								<Span>Coding Tools - Github, NPM</Span>
								<Span>
									Design Tools - XD, Illustrator,
									Photoshop, After effects, Fusion 360,
									Keyshot{' '}
								</Span>
								<Span>
									Soft Skills - Project leading, Team
									work{' '}
								</Span>
							</TextArea>
							<TextArea>
								Send me an email!{' '}
								<Span>
									<Links href="mailto:martinlinden.sthlm@icloud.com">
										martinlinden.sthlm@icloud.com
									</Links>
								</Span>
							</TextArea>
						</TextContainer>
					</MainContainer>
				</FlexWrpper>
			</Grid>
		);
	}
}
