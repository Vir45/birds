import React from "react";

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleItem = this.handleItem.bind(this);
	}

	handleItem(event) {
		const target = event.target.closest('li');
		if(!target) return;
		const key = target.dataset.index - 1;
		this.props.handleChoiceBirds(key);
	}

	render() {
		const name = this.props.bird;
		const listItem = name.map((item) =>
			<LisItem key={item.id}
			 index={item.id}
				value={item.name}
				onClick={this.handleItem}
				state={this.props.state}
				correctAnswer={this.props.correctAnswer}
				 />
		);
		return (
			<ul className="options-list">
				{listItem}
			</ul>
		)
	}
}


class LisItem extends React.Component {
	render() {
			return (
				<li onClick={this.props.onClick} data-index={this.props.index} >
					<span className="circle"></span>
				<span>{this.props.value}</span>
				</li>
			)
		}
}

export default Options;
