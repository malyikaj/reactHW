import React, { Component } from 'react';
import Img from "./Capricorn.png";


class CapricornDailyApi extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const URL = 'https://aztro.sameerkumar.website/?sign=capricorn&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

    render() {
        return (
          <ul className="course media group">
          <img className="course-img" src= {Img} alt="Capricorn Sign" />
          <div>
            <h2>Capricorn</h2>
              <p><strong>{this.state.json.date_range}</strong></p>
              <p>Todays's Mood: <strong>{this.state.json.mood}</strong></p>
              <p>Today's Lucky Number: <strong>{this.state.json.lucky_number}</strong></p>
              <p>Today's Lucky Time: <strong>{this.state.json.lucky_time}</strong></p>
              <p>Your Color: <strong>{this.state.json.color}</strong></p>
              <p>Love Compatibility Sign: <strong>{this.state.json.compatibility}</strong></p> 
              <p>{this.state.json.description}</p> 
          </div>   
          </ul>  
          
        );
    }
}

export default CapricornDailyApi;

