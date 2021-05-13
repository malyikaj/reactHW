import React from 'react';


class WebsiteVisitors extends React.Component {
  render(){
      return(
    <div>
      <h3>Website Visitors</h3>
      <h2>{this.props.visitors}</h2>
    </div>
  )
}
}

export default WebsiteVisitors;