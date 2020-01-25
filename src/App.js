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
	height: 100vh;
	max-width: 100vw;
	display: grid;
	grid-template-columns: 1fr 60%;
	grid-template-rows: 100px minmax(400px, 1fr) 100px;
	grid-template-areas: "header header" "intro article"
		"landingFooter landingFooter";

	@media (max-width: 700px) {
		//ipad
	}
`;

const ProjectLayout = styled.div`
	background-color: #f8f8f8;
	height: 400px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "about picture";
`;

const ContactLayout = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 100px 1fr;
	grid-template-areas: "header header" "pic contact";
`;
const ImageGalleryLayout = styled.div`
	height: 200px;
	max-width: 100vw;
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
					<ImageGalleryLayout>
						<ImageGallery />
					</ImageGalleryLayout>
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
