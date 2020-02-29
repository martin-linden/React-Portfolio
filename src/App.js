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

const GridLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(6, 1fr);
	height: 90vh;
`;

function App() {
	return (
		<div className="page">
			<ThemeProvider theme={theme}>
				<Router>
					<Route path="/" component={Header} />
					<Route
						render={({ location }) => (
							<TransitionGroup>
								<CSSTransition
									key={location.key}
									timeout={200}
									classNames="fade"
								>
									<GridLayout>
										<Switch location={location}>
											<Route
												exact
												path="/"
												component={Home}
											/>
											<Route
												path="/contact"
												component={ContactPage}
											/>
										</Switch>
									</GridLayout>
								</CSSTransition>
							</TransitionGroup>
						)}
					/>
				</Router>
			</ThemeProvider>
		</div>
	);
}

const Home = () => (
	<React.Fragment>
		<Article />
		<Intro />
		<LandingFooter />
	</React.Fragment>
);
const ContactPage = () => <React.Fragment />;

export default App;
