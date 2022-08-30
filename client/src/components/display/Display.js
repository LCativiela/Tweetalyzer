// Display.js

import React, { Component } from "react";
import TweetTable from './tweetTable/TweetTable';

import axios from 'axios';

class Display extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            data: {},
            error: '',
        };
      }

    componentDidMount() {
        console.log("Sending #"+this.props.search+" request to Back-End")
        axios.get('http://127.0.0.1:5000/' + this.props.search)
        .then(res => this.setState({ data: res.data}))
        .catch(error => this.setState({ error}))
    }
  
  
    render() {

      return (
        <div>
            <h1>Display</h1>
            <TweetTable data={this.state.data.tweetList}/>
        </div>
      );
    }
  }
  
  export default Display;