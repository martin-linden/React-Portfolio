import React from 'react';
import Header from './components/Header';
import Article from './components/Article';
import styled from 'styled-components';
import LandingFooter from './components/LandingFooter';
import Contact from './components/Contact';
import Intro from './components/Intro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/App.css';
import Projects from './components/Projects';
import theme from './assets/theme';
import { ThemeProvider } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
	grid-template-rows: 400px;
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
	grid-template-rows: 100px 1fr 100px;
	grid-template-areas: "header header" "pic contact"
		"landingFooter landingFooter";
	@media (max-width: 618px) {
		//small-screen
		grid-template-columns: 1fr;
		grid-template-areas: "header header" "contact contact"
			"landingFooter landingFooter";
	}
`;
/* const ImageGalleryLayout = styled.div`
	height: auto;
	width: auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "kyh kyh2";
`;
 */
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<TransitionGroup>
					<CSSTransition timeout={300} classNames="fade">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route
								path="/contact"
								component={ContactPage}
							/>
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</Router>
		</ThemeProvider>
	);
}

const Home = () => (
	<LandingLayout>
		<Header />
		<Intro />
		<Article />
		<LandingFooter />
	</LandingLayout>
);
const ContactPage = () => (
	<ContactLayout>
		<Header />
		<Contact />
		<LandingFooter />
	</ContactLayout>
);

export default App;
