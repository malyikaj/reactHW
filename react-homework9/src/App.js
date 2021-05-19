import React from 'react'
import Score from './component/Score'
import './App.css'

class App extends React.Component {
	state = {
		score: 0,
		category: "",
		points: 0, 
		clue: "",
		answer: "",
		isShown: false
	}

	hint = () => {

		const url = 'http://jservice.io/api/random'

		fetch(url) // returns the promise
			.then((res) => {  // handles the promise ... and also returns a new promise
				return res.json();
			})
			.then((data) => {
				const clueData = data[0];
				console.log(clueData); 
				this.setState({
					category: clueData.category.title,
					points: clueData.value,
					clue: clueData.question,
					answer: clueData.answer,
					//isShown: false
				});
			});
	}

	displayAnswer = () => { 
		this.setState({isShown: !this.state.isShown});
	}

	render() {
		return (
			<div className='app'>
				<h1 className='title'> Welcome to Jeopardy!</h1>
				<Score title="Score" value={this.state.score} points= {this.state.points}/>
				<h2>Let's play!</h2>

				<button className="hint_btn" onClick={this.hint}>Trivia Question:</button>

				<div className = "clueData">
				<div className="category">Category: {this.state.category}</div>
				<div className="points">Points: {this.state.points} </div>
				<div className="clue">Question: {this.state.clue} </div>
				</div>
				<button id="reveal" onClick={this.displayAnswer}>Reveal Answer </button>
				{this.state.isShown? <p className="Answer"> Answer: {this.state.answer}</p>: null}
			</div>
			)
	}
}
export default App;