import React from 'react';

const players = [
  {
   name: "Guil",
   score: 50
 },
 {
   name: "Treasure",
   score: 85
 },
 {
   name: "Ashley",
   score: 95
 },
 {
   name: "James",
   score: 80
 }
];


const Header = (props) => {
 return (
   <header>
     <h1>{ props.title }</h1>
     <span className = "stats">Items:</span>
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
     <Player name ="Bread" score={1} />
     <Player name ="Butter" score={1} />
   </div>
 );
}

export default App;