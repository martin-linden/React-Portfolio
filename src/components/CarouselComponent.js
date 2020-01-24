import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import c1 from './c1.png';
import profile from './Asset1.svg';

const Picture = styled.img``;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	grid-area: carousel;
	padding: 5%;
`;

export default function CarouselComponent() {
	return (
		<Container>
			<div class="carousel-wrapper">
				<Carousel useKeyboardArrows showThumbs={false}>
					<div>
						<img src={c1} />
					</div>
					<div>
						<img src={profile} />
					</div>
					<div>
						<img src={c1} />
					</div>
				</Carousel>
			</div>
		</Container>
	);
}
