import React from 'react';
import './main.scss';
import Nav from './components/Nav';
import Header from './components/Header';
import styled from 'styled-components';

const LeftContainer = styled.div`
	background: #537463;
	grid-row: 0 / 2;
`;
const RightContainer = styled.div`
	background: #537463;
	grid-row: 2 / 5;
`;

const AppLayout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 1fr);
`;

function App() {
	return (
		<AppLayout>
			<LeftContainer>
				<Nav />
			</LeftContainer>
			<RightContainer>
				<Header />
			</RightContainer>
		</AppLayout>
	);
}

export default App;
