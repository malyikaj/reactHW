import React, { Component } from 'react';


class Home extends Component {    
  
  render() {
    return (
      
      <div className="main-content home">
       
        <h2>Welcome to Astrology Center!</h2>
        <p>Check out our <strong><a href="/DailyHoroscopes"target="_blank">Daily Horoscopes</a></strong> to see what future has in store for you today! Complete with </p>
        <p>Click on our <strong><a href="/AboutUs">About</a></strong> to find out where we sourced our content.</p>
        <hr />
      </div>
    );
  }
}

export default Home;