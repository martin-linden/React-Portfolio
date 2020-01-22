import React from 'react';
import './main.scss';
import Main from './components/Main';
import Header from './components/Header';
import Article from './components/Article';
import styled from 'styled-components';
import Aside from './components/Aside';
import LandingFooter from './components/LandingFooter';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../src/App.css';
import '../src/main.scss';
import Footer from './components/Footer';

// Layout
const LandingLayout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 40% 1fr;
	grid-template-rows: 100px minmax(400px, 1fr) 100px;
	grid-template-areas: "header header" "main article"
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

const ContactLayout = styled(Contact)`height: auto;`;

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/contact">
					<ContactLayout>
						<Header />
					</ContactLayout>
					<Header />
					<Footer />
				</Route>
				<Route path="/">
					<LandingLayout>
						<Header />
						<Main />
						<Article />
						<LandingFooter />
					</LandingLayout>
					<AboutLayout>
						<About />
						<Footer />
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
