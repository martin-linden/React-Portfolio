import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import c1 from './c1.png';

const Picture = styled.img``;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	grid-area: carousel;
`;

export default function CarouselComponent() {
	return (
		<Container>
			<div class="carousel-wrapper">
				<Carousel
					width="700px"
					useKeyboardArrows
					showThumbs={true}
				>
					<div>
						<img src={c1} />
					</div>
					<div>
						<img src={c1} />
					</div>
					<div>
						<img src={c1} />
					</div>
				</Carousel>
			</div>
		</Container>
	);
}
