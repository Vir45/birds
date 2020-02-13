import React from "react";
import logoIncognito from "./image/incognito.jpg";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

class Question extends React.Component {
	render() {
		return (
			<div className="question">
				<div className="logo-incognito">
					<IncognitoLogo state={this.props.state} bird={this.props.bird}  />
				</div>
				<div className="player">
					<NameOdBirds state={this.props.state} bird={this.props.bird}/>
					<Player bird={this.props.bird} />
				</div>
			</div>

		)
	}
}

class IncognitoLogo extends React.Component {
	render() {
		const state = this.props.state;

		if (state) {
			const way = this.props.bird.image;
			return (
				<img src={way} alt="bird"></img>
			)
		} else {
			return (
				<img src={logoIncognito} alt="incornito birds">
				</img>
			)
		}
	}
}

class Player extends React.Component {
	render() {
		const way = this.props.bird.audio;
		return (
			<AudioPlayer
			showDownloadProgress={true}
			progressJumpStep
			showVolumeControl={true}
			autoPlay={false}
			showSkipControls={false}
				src={way}
			/>
		)
	}
}


function NameOdBirds(props) {
	const state = props.state;
	if(state) {
		return (
			<h3 className="nameOfBirds">
				{props.bird.name}
			</h3>
		)
	} else {
		return(<h3 className="nameOfBirds">******</h3>)
	}
}

export default Question;
