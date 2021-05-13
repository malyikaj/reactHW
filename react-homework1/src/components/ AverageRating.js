import React from 'react';

class AverageRating extends React.Component {
  render(){
      return(
    <div>
      <h3>Average Rating</h3>
      <h2>{this.props.rating}</h2>
      
    </div>
  )
}
}

export default AverageRating;