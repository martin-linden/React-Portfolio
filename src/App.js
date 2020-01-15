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

// Layout
const LandingLayout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 700px 1fr 100px;
	grid-template-rows: 100px minmax(400px, 1fr) 100px;
	grid-template-areas: "header header header" "main article aside"
		"footer footer footer";
	@media (max-width: 760px) {
		//ipad
		grid-template-columns: 1fr 100px;
		grid-template-rows: 50px 420px 1fr 50px;
		grid-template-areas: "header header" "main main" "article aside"
			"footer aside";
	}
`;

//const ContactLayout = styled.div`height: auto;`;
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
