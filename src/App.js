import React from 'react';
import './main.scss';
import Main from './components/Main';
import Header from './components/Header';
import Article from './components/Article';
import styled from 'styled-components';
import Aside from './components/Aside';
import Footer from './components/Footer';

const LandingLayout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 400px 100px;
	grid-template-rows: 100px 1fr 100px;
	grid-template-areas: "header header header" "main article aside"
		"footer footer footer";
	/* grid-gap: 20px; */
`;

function App() {
	return (
		<LandingLayout>
			<Header />
			<Main />
			<Article />
			<Aside />
			<Footer />
		</LandingLayout>
	);
}

export default App;
