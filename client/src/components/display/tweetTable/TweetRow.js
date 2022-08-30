// TweetRow.js

import React, { Component } from "react";

class TweetRow extends Component {

    
  
  
    render() {
      
  
      return (
        <div>
            <p>Tweet Table {this.props.data &&this.props.data.text}</p>
        </div>
      );
    }
  }
  
  export default TweetRow;