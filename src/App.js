import React from 'react';
import './main.scss';
import Main from './components/Main';
import Header from './components/Header';
import Article from './components/Article';
import styled from 'styled-components';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Layout
const LandingLayout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 40% 1fr;
	grid-template-rows: 100px minmax(400px, 1fr) 100px;
	grid-template-areas: "header header" "main article" "footer footer";

	/* @media (max-width: 1030px) {
		//ipad
		
	} */
`;

const ContactLayout = styled(Contact)`height: auto;`;

function App() {
	return (
		<Router>
			<LandingLayout>
				<Header />
				<Route exact path="/" component={Landing} />
				<Route path="/contact" component={ContactLayout} />
				<Footer />
			</LandingLayout>
		</Router>
	);
}

export default App;

const Landing = () => (
	<React.Fragment>
		<Main />
		<Article />
		<Aside />
	</React.Fragment>
);
