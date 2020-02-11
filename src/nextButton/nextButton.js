import React from "react";

class NextButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleNextRound();
	}

	render() {
		const state = this.props.state;
		if(state) {
			return (
				<button className="active-button" onClick={this.handleClick}>Next Level</button>
			)
		} else {
			return (
				<button className="button-next">Next Level</button>
			)
		}
	
	}
}

export default NextButton;
