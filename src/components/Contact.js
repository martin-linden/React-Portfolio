import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMe from '../images/about.svg';

const Title = styled.h1`
	color: #f65744;
	font-size: 60px;
	font-weight: 900;
	margin-bottom: 5%;
`;

const Text = styled.p`
	color: black;
	max-width: 400px;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	grid-area: contact;
`;

const MainContainer = styled.div`
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
		height: 300px;
	}

	@media (max-width: 618px) {
		//small-screen
		display: none;
		pointer-events: none;
	}
`;

const TextArea = styled.div`margin-bottom: 4%;`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: pic;
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

export default class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
					<Picture
						src={AboutMe}
						alt="Martin standing on a mountain"
					/>
				</Container>
				<MainContainer>
					<TextContainer>
						<Title>Hi there!</Title>
						<TextArea>
							<Text>
								I'm a front-end developer from Stockholm,
								Sweden currently studying at KYH.
								Passionate about developing smart and good
								looking solutions for the web.
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
								Design Tools - XD, Illustrator, Photoshop,
								After effects, Fusion 360, Keyshot{' '}
							</Span>
							<Span>
								Soft Skills - Project leading, Team work{' '}
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
			</React.Fragment>
		);
	}
}
