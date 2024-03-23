import React, { Component } from 'react'
import './DesignProject.css';


class DesignProject extends Component  {
  render(){
    return (
      <div className="design-img">
      <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
  
          
      </div>
  
  </div>
    )
  }
  
 
}

export default DesignProject