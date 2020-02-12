import React from "react";

class NextButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.buttonNext = React.createRef();
	}

	handleClick() {
		this.props.handleNextRound();
		this.buttonNext.current.blur()
	}

	render() {
		const state = this.props.state;
		if(state) {
			return (
				<button className="active-button" onClick={this.handleClick} ref={this.buttonNext}>Next Level</button>
			)
		} else {
			return (
				<button className="button-next" ref={this.buttonNext}>Next Level</button>
			)
		}
	
	}
}

export default NextButton;
