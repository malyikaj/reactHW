import React, { Component } from 'react';
import Img from "./Aries.png";


class AriesDailyApi extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

    render() {
        return (
          <ul className="course media group">
          <img className="course-img" src= {Img} alt="Aries Sign" />
          <div>
            <h2>Aries</h2>
              {/* <h5>{this.state.json.current_date}</h5> */}
              <p><strong>{this.state.json.date_range}</strong></p>
              <p>Todays's Mood: <strong>{this.state.json.mood}</strong></p>
              <p>Today's Lucky Number: <strong>{this.state.json.lucky_number}</strong></p>
              <p>Today's Lucky Time: <strong>{this.state.json.lucky_time}</strong></p>
              <p>Your Color: <strong>{this.state.json.color}</strong></p>
              <p>Love Compatibility: <strong>{this.state.json.compatibility}</strong></p> 
              <p>{this.state.json.description}</p> 
          </div>   
          </ul>  
          
        );
    }
}

export default AriesDailyApi;

