import React from 'react'
import ScoreTotal from './component/Score'
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


	
	question = () => {

		const url = 'http://jservice.io/api/random'

		fetch(url) // returns the promise
			.then((res) => {  // handles the promise ... and also returns a new promise
				return res.json();
			})
			.then((data) => {
				const questionData = data[0];
				console.log(questionData); 
				this.setState({
					category: questionData.category.title,
					points: questionData.value,
					clue: questionData.question,
					answer: questionData.answer,
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
				<ScoreTotal title="Score" value={this.state.score} points= {this.state.points}/>

				<h2>Let's play!</h2>

				<button className="trivia_button" onClick={this.question}>Press for Trivia Question</button>

				<div className = "questionData">
				<div className="category">Category : {this.state.category}</div>

				<br></br>

				<div className="points">Worth : </div>
				<div className="points2">{this.state.points} Points </div>

				<br></br>

				<div className="question">Question : {this.state.clue} </div>

				</div>
				<button id="reveal" onClick={this.displayAnswer}>Reveal Answer </button>
				{this.state.isShown? <p className="Answer"> Answer : {this.state.answer}</p>: null}
			</div>
			)
	}
}


export default App;