import React from "react";

class Navbar extends React.Component {
	render() {
		const type = this.props.type;
		const listItem = type.map((item, index) =>
			<LisItem key={index.toString()}
				value={item.type}
				state={item.active} />
		);
		
		return (
			<ul className="birds-list">
				{listItem}
			</ul>
		)
	}
}

class LisItem extends React.Component {
	render() {
		const state = this.props.state;
		if (state) {
			return (
				<li className="navbar-active_item">
					{this.props.value}
				</li>
			)
		} else {
			return (
				<li>
					{this.props.value}
				</li>
			)
		}
	}
}

export default Navbar;
