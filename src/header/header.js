import React from "react";
import Navbar from '../navbar/navbar';
import PropTypes from 'prop-types';
import logo from './image/logo.svg';




class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="row-1">
					<Logo />
					<Score score={this.props.score} />
				</div>
				<div className="row-2">
					<Navbar type={this.props.type} />
				</div>
			</div>
		)
	}
}

function Logo() {
	return (
		<img className="logo" src={logo} alt="logo"></img>
	)
}

function Score(props) {
	return (
		<p>Score: {props.score}</p>
	)
}

Header.propTypes = {
	point: PropTypes.number
}

Header.defaultProps = {
	point: 0
}

export default Header;
