import React from 'react';
import './main.scss';
import Main from './components/Main';
import Header from './components/Header';
import Article from './components/Article';
import styled from 'styled-components';
import LandingFooter from './components/LandingFooter';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Intro2 from './components/Intro2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../src/App.css';
import '../src/main.scss';
import Footer from './components/Footer';
import CarouselComponent from './components/CarouselComponent';
import Projects from './components/Projects';
import ImageGallery from './components/ImageGallery';

// Layout
const LandingLayout = styled.div`
	background: white;
	min-height: 100vh;
	max-width: 100vw;
	display: grid;
	grid-template-columns: 1fr 60%;
	grid-template-rows: 100px minmax(400px, 1fr) 100px;
	grid-template-areas: "header header" "intro article"
		"landingFooter landingFooter";

	@media (max-width: 720px) {
		//medium-screen
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 510px) {
		//small-screen
		grid-template-columns: 1fr;
		grid-template-rows: 100px minmax(100px, 1fr) 1fr 100px;
		grid-template-areas: "header header" "intro intro"
			"article article" "landingFooter landingFooter";
	}
	@supports (-webkit-appearance: none) {
		.os-android & {
			min-height: calc(100vh - 56px);
		}
	}
`;

const ProjectLayout = styled.div`
	background-color: #f8f8f8;
	height: 400px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "about picture";

	@media (max-width: 720px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: "picture" "about";
	}
`;

/* // We listen to the resize event
window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}); */

const ContactLayout = styled.div`
	min-height: 100vh;
	/* height: calc(var(--vh, 1vh) * 100); */
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 100px 1fr;
	grid-template-areas: "header header" "pic contact";
`;
const ImageGalleryLayout = styled.div`
	height: auto;
	width: auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "kyh kyh2";
`;

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/contact">
					<ContactLayout>
						<Header />
						<Contact />
					</ContactLayout>
				</Route>
				<Route path="/">
					<LandingLayout>
						<Header />
						<Intro />
						<Article />
						<LandingFooter />
					</LandingLayout>
					<ProjectLayout>
						<Projects />
					</ProjectLayout>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

const Landing = () => (
	<React.Fragment>
		<Main />
		<Article />
	</React.Fragment>
);

//test
