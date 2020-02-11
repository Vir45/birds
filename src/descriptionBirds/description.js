import React from "react";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';


class Desctiption extends React.Component {
	render() {
		const state = this.props.state;
		if (state) {
			return (
				<DesctiptionBirds bird={this.props.bird} />
			)
		} else {
			return (
				<p>Послушайте плеер.
				Выберите птицу из списка</p>
			)
		}
	}
}

class DesctiptionBirds extends React.Component {
	render() {
		const object = this.props.bird;
		return (
			<React.Fragment>
				<div className="description-current-bird">
					<img className="birds-image" src={object.image} alt={object.name}></img>
					<div className="about-current-bird">
						<h3 className="name-current-bird">
							{object.name}
						</h3>
						<h3 className="latin-name">
							{object.species}
						</h3>
						<Player src={object.audio} />
					</div>
				</div>
				<p className="full-description-current-bird">
					{object.description}
				</p>
			</React.Fragment>
		)
	}
}

class Player extends React.Component {
	render() {
		const way = this.props.src;
		return (
			<AudioPlayer
			autoPlay={false}
			showDownloadProgress={true}
			progressJumpStep
				src={way}
			/>
		)
	}
}

export default Desctiption;
