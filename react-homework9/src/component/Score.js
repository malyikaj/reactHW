import React from 'react';

class Score extends React.Component{
  constructor(props){
    super(props);
    this.state={score:0}
  }
  

  scoreIncrease = () => {
    this.setState({
      score: this.state.score + this.props.points
    });
  }
 
  scoreDecrease = () => {
    this.setState({
      score: this.state.score - this.props.points
    });
  }

  scoreReset = () => {
    this.setState({score:0, points:0});
  }

  render(){
    return(
      <div className="score">
            <h3>Score Points: {this.state.score}</h3>
            <div>
            <button id="dec" onClick={this.scoreDecrease}>- Points</button>
			<button id="inc" onClick={this.scoreIncrease}>+ Points</button>
			<button id="reset" onClick={this.scoreReset}>Reset</button>
            </div>
      </div>
    );
  }
}
export default Score;