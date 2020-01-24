import React from 'react';
import './main.scss';
import Main from './components/Main';
import Header from './components/Header';
import Article from './components/Article';
import styled from 'styled-components';
import LandingFooter from './components/LandingFooter';
import Contact from './components/Contact';
import About from './components/About';
import Intro from './components/Intro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../src/App.css';
import '../src/main.scss';
import Footer from './components/Footer';
import CarouselComponent from './components/CarouselComponent';

// Layout
const LandingLayout = styled.div`
	background: #f0edee;
	height: 100vh;
	max-width: 100vw;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 100px minmax(400px, 1fr) 100px;
	grid-template-areas: "header header" "intro article"
		"landingFooter landingFooter";

	@media (max-width: 700px) {
		//ipad
	}
`;

const AboutLayout = styled.div`
	background-color: #f8f8f8;
	height: 600px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 70px;
	grid-template-areas: "about picture" "footer footer";
`;

const ContactLayout = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 100px 1fr 100px;
	grid-template-areas: "header header" "pic contact" "footer footer";
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
					<AboutLayout>
						<About />
					</AboutLayout>
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
