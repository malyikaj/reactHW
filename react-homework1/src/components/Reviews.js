import React from 'react';


class Reviews extends React.Component {
  render(){
      return(
    <div>
      <h3>Reviews</h3>
      <h2>{this.props.reviews}</h2>
      
    </div>
  )
}
}
export default Reviews;