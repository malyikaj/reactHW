import React from 'react';
// import ReactDOM from 'react-dom';

const players = [
  {
   items: '',
   units: '',
   quantity: 0,
   isPurchased: false
 },
 {
  items: '',
  units: '',
  quantity: 0,
  isPurchased: false
 },
 {
  items: '',
  units: '',
  quantity: 0,
  isPurchased: false
 },
 {
  items: '',
  units: '',
  quantity: 0,
  isPurchased: false
 }
];


const Header = (props) => {
 return (
   <header>
     <h1>{ props.title }</h1>
     <span className = "stats">Items: { props.totalPlayers }</span>
   </header>
 );
}


const Player = (props) => {
 return (
   <div className="player">
     <span className="player-name">
       { props.name }
     </span> 

    <Counter score={ props.score }/>
   </div>
 );
}

const Counter = (props) => {
 return(
   <div className="counter">
     <button className="counter-action decrement"> - </button>
     <span className="counter-score">{ props.score }</span>
     <button className="counter-action increment"> + </button>
     </div>
 );
}

const App = () => {
 return (
   <div className ="scoreboard">
     <Header 
        title="Grocery List" 
        totalPlayers={1}
        />

     {/* Player list*/}
     <Player name ="Milk" score={1} />
     <Player name ="Eggs" score={2} />
     <Player name ="Bread" score={3} />
     <Player name ="Water" score={4} />
   </div>
 );
}

// ReactDOM.render(
//  <App initializePlayers={players}/>,
//  <Player />,
//  document.getElementById('root')
// );

export default App;