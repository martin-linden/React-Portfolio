import React from 'react';
import './main.scss';
import Main from './components/Main';
import Header from './components/Header';
import Article from './components/Article';
import styled from 'styled-components';
import Aside from './components/Aside';
import Footer from './components/Footer';

const AppLayout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 250px 100px;
	grid-template-rows: 100px 1fr 100px;
	grid-template-areas: "header header header" "main article aside"
		"footer footer footer";
`;

function App() {
	return (
		<AppLayout>
			<Header />
			<Main />
			<Article />
			<Aside />
			<Footer />
		</AppLayout>
	);
}

export default App;
