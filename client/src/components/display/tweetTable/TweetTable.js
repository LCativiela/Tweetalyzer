// TweetTable.js

import React, { Component } from "react";
import TweetRow from "./TweetRow";

class TweetTable extends Component {
    

  
  
    render() {
      console.log(this.props.data)
  
      return (
        <div>
        {
          this.props.data && this.props.data.map(row =>(
            <TweetRow key={row.id.toString()} data={row} />
          ))
        }
        </div>
      );
    }
  }
  
  export default TweetTable;