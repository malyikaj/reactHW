import axios from "axios";
import Img from "./Aquarius.png";
import React, { Component } from 'react';

class AquariusWeeklyApi extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const url = 'https://api.vedicastroapi.com/json/prediction/weeklymoon'
        var params = {
            zodiac: 11,
            show_same: true,
            type:"big",
            week:'thisweek',
            api_key: '560f5b61-f11e-5e5a-9a83-9d77e62e8f7f',
            split:true
        }
        
        const Prediction = async () => {
          try {
              //wait for the VedicAstroAPI's response
            var response = await axios.get(url,{params:params})
            var result = response.data
            console.log(result)
            console.log(result)
            if(result.status === 200){
                //200 is success code 
                this.setState({ json : result.response})
              
                //do something with the response data
            }else{
                ////console.log("Error reason",result.response)
            }
          } catch (error) {
            console.error(error)
          }
        } 
        Prediction();
        
    }

    render() {
      
        return (
        <ul className="course media group">
          <img className="course-img" src= {Img} alt="Aquarius Sign" />
          <div>
            <h2>Aquarius</h2>
            <p> {this.state.json.bot_response?.total_score.split_response} </p>
          </div>   
          </ul> 
        );
    }
}

export default AquariusWeeklyApi;

