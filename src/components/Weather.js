import React, { Component } from 'react';
import styled from 'styled-components';
import { API_KEY, PATH_LOCATION, PATH_BASE } from '../constants/index';

const Celcius = styled.div`
	font-size: 12px;
	color: black;
	margin-left: 3px;
`;

const Temp = styled.div`
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.primaryColor};
	font-size: 13px;
`;

export default class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weather: null
		};
		this.setCurrentWeather = this.setCurrentWeather.bind(this);
		this.fetchCurrentWeather = this.fetchCurrentWeather.bind(this);
	}

	fetchCurrentWeather = () => {
		fetch(`${PATH_BASE}${PATH_LOCATION}${API_KEY}`)
			.then((response) => response.json())
			.then((weather) => this.setCurrentWeather(weather));
	};

	setCurrentWeather = (weather) => {
		this.setState({ weather });
	};

	componentDidMount() {
		this.fetchCurrentWeather();
	}

	render() {
		console.log(this.state);
		return (
			<Temp>
				{/* {this.state.weather ? (
					this.state.weather.main.temp
				) : null}{' '}
				<Celcius>°C</Celcius> */}
			</Temp>
		);
	}
}
