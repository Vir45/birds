import React from 'react';
import Header from './header/header';
import Question from './question/question';
import Options from './options/options';
import Desctiption from './descriptionBirds/description';
import NextButton from './nextButton/nextButton';
import Finished from './finished/finish';
import './App.css';
import birdsData from './birdsData';


let typeOfBirds = [{ active: true, type: "Разминка" },
{ active: false, type: "Воробьиные" },
{ active: false, type: "Лесные птицы" },
{ active: false, type: "Певчие птицы" },
{ active: false, type: "Хищные птицы" },
{ active: false, type: "Морские птицы" }];



function random(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}


const res = random(0, 5);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			round: 0,
			incognitoBirds: res,
			guessed: false,
			currentChoice: null,
			showDescription: false,
			score: 0,
			point: 0,
			correctAnswer: 0,
			finished: false
		};
		this.handlerandomSong = this.handlerandomSong.bind(this);
		this.handleChoiceBirds = this.handleChoiceBirds.bind(this);
		this.handleNextRound = this.handleNextRound.bind(this);
		this.handleRestart = this.handleRestart.bind(this);
	}

	handlerandomSong() {
		const round = this.state.round;
		const max = birdsData[round].length - 1;
		const rand = this.random(0, max);
		this.setState({ incognitoBirds: rand })
	}

	random(min, max) {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}

	handleChoiceBirds(key) {
		this.setState({ currentChoice: key, showDescription: true });
		const elem = document.querySelectorAll('[data-index]')[key];
		const elemSpan = elem.querySelector('span');
		if (this.state.guessed === true) return;
		if (this.state.incognitoBirds === key) {
			this.setState({ guessed: true, correctAnswer: 5 });
			this.setState((state) => ({ score: state.score + state.point }));
			elemSpan.style.backgroundColor = '#00bc8c';

		} else {
			this.setState((state) => ({ point: (state.point - 1) < 0 ? 0 : state.point - 1}))
			// if (this.state.point < 0) {
			// 	this.setState({ point: 0 })
			// }
			this.setState({ correctAnswer: 3 })
			elemSpan.style.backgroundColor = '#b22222';
		}
	}

	changeActive(arr) {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i].active === true) {
				arr[i].active = false;
				arr[i + 1].active = true;
				break
			}
		}
		return arr
	}

	handleNextRound() {
		if (this.state.guessed) {
			if (this.state.round === 5) {
				this.setState({finished: true})
				return null
			}
			this.setState({ point: 5, guessed: false, correctAnswer: 0, showDescription: false });
			this.setState((state) => ({ round: state.round + 1 }));
			typeOfBirds = this.changeActive(typeOfBirds);
			const elem = document.querySelectorAll('[data-index]');
			for (let i = 0; i < elem.length; i++ ) {
				const elemSpan = elem[i].querySelector('span');
				elemSpan.style.backgroundColor = '#444';
			}
			
		}
	}

	makeInitialeActive(arr) {
		for(let i = 0; i < arr.length; i++) {
			if(arr[i].active === true) {
				arr[i].active = false;
			}
		}
		arr[0].active = true
		return arr
	}

	handleRestart() {
		this.setState({
			round: 0,
			incognitoBirds: res,
			guessed: false,
			currentChoice: null,
			showDescription: false,
			score: 0,
			point: 5,
			correctAnswer: 0,
			finished: false
		});
		typeOfBirds = this.makeInitialeActive(typeOfBirds);
		const elem = document.querySelectorAll('[data-index]');
			for (let i = 0; i < elem.length; i++ ) {
				const elemSpan = elem[i].querySelector('span');
				elemSpan.style.backgroundColor = '#444';
			}
	}

	render() {
		const round = this.state.round;
		const item = this.state.incognitoBirds;
		const currentChoice = this.state.currentChoice;
		const showDescription = this.state.showDescription;
		const score = this.state.score;
		return (
			<div className="wrapper">
				<Header score={score} type={typeOfBirds} />
				<Question state={this.state.guessed} bird={birdsData[round][item]} />
				<div className="options-block">
					<Options bird={birdsData[round]} handleChoiceBirds={this.handleChoiceBirds} />
					<div className="description">
						<Desctiption state={showDescription} bird={birdsData[round][currentChoice]} />
					</div>
				</div>
				<NextButton state={this.state.guessed} handleNextRound={this.handleNextRound} />
				<Finished state={this.state.finished} score={this.state.score} handleRestart={this.handleRestart} />
			</div>
		)
	}
}


export default App;
