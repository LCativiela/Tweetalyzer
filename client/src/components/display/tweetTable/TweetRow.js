// TweetRow.js

import React, { Component } from "react";

class TweetRow extends Component {

    
  
  
    render() {
      
  
      return (
        <div>
            <p>{this.props.data && this.props.data.text}</p>
        </div>
      );
    }
  }
  
  export default TweetRow;