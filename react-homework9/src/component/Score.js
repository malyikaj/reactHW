import React from 'react';

class ScoreTotal extends React.Component{
  constructor(props){
    super(props);
    this.state={score:0}
  }
  

  increaseScore = () => {
    this.setState({
      score: this.state.score + this.props.points
    });
  }
 
  decreaseScore = () => {
    this.setState({
      score: this.state.score - this.props.points
    });
  }

  resetScore = () => {
    this.setState({score:0, points:0});
  }

  render(){
    return(
      <div className="score">
            <h3 className="score-points">Score Points: {this.state.score}</h3>
            <div>
            <button id="dec" onClick={this.scoreDecrease}>- Points</button>
			<button id="inc" onClick={this.scoreIncrease}>+ Points</button>
			<button id="reset" onClick={this.resetScore}>Reset</button>
            </div>
      </div>
    );
  }
}
export default ScoreTotal;