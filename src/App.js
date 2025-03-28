import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {
				fullName: "John Doe",
				bio: "A passionate developer with a love for learning and creating innovative solutions.",
				imgSrc: "./img.jpg",
				profession: "Software Engineer",
			},
			shows: false,
			mountTime: Date.now(),
		};
	}

	// Toggle show state
	toggleProfile = () => {
		this.setState((prevState) => ({
			shows: !prevState.shows,
		}));
	};

	// Lifecycle method to calculate time since mount
	componentDidMount() {
		this.intervalId = setInterval(() => {
			this.setState({
				timeSinceMounted: Math.floor(
					(Date.now() - this.state.mountTime) /
						1000
				),
			});
		}, 1000);
	}

	// Clean up interval to prevent memory leaks
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		const { person, shows, timeSinceMounted } = this.state;

		return (
			<div className="App">
				<h1>Person Profile App</h1>

				{/* Time since mount */}
				<p>
					Time since component mounted:{" "}
					{timeSinceMounted} seconds
				</p>

				{/* Toggle button */}
				<button onClick={this.toggleProfile}>
					{shows
						? "Hide Profile"
						: "Show Profile"}
				</button>

				{/* Conditional rendering of profile */}
				{shows && (
					<div className="profile">
						<h2>{person.fullName}</h2>
						<img
							src={person.imgSrc}
							alt={person.fullName}
							style={{
								maxWidth: "300px",
								borderRadius:
									"10px",
							}}
						/>
						<p>
							<strong>
								Profession:
							</strong>{" "}
							{person.profession}
						</p>
						<p>
							<strong>Bio:</strong>{" "}
							{person.bio}
						</p>
					</div>
				)}
			</div>
		);
	}
}

export default App;
