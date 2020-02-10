import React, { Component } from 'react';
import { API_KEY, PATH_LOCATION, PATH_BASE } from '../constants/index';

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
			<div>
				{this.state.weather ? this.state.weather.main.temp : null}
			</div>
		);
	}
}
