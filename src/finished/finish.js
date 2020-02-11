import React from "react";
import max from "./image/max.gif"

class Finished extends React.Component {
	constructor(props) {
		super(props);
		this.handle = this.handle.bind(this);
	}

	handle() {
		this.props.handleRestart()
	}

	render() {
		const state = this.props.state;

		if (state) {
			const score = this.props.score;
			if (score >= 30) {
				return (
					<div className="finished">
						<p>
							Ну ты реально крут!!<br />
							30 из 30!!!
				</p>
						<img src={max} alt={"you cool man"}>
						</img>
					</div>
				)
			}
			return (
				<div className="next-attempt">
					<p>
						Вы набрали {this.props.score} из 30 баллов!!!
					</p>
					<Button onClick={this.handle} />
				</div>
			)
		} else{
			return null
		}
	}
}

class Button extends React.Component {
	render() {
		return (
			<button className="button-next-attempt" onClick={this.props.onClick}>Попробуем еще раз?</button>
		)
	}
}

export default Finished;
