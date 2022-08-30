// Display.js

import React, { Component } from "react";
import DataTable from "./tweetTable/DataTable";
import Spinner from './Spinner';

import './Display.scss';

import axios from 'axios';

class Display extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: true,
            isError: false,
            data: {},
            error: '',
        };
      }

    componentDidMount() {
        console.log("Sending #"+this.props.search+" request to Back-End")
        axios.get('http://127.0.0.1:5000/' + this.props.search)
        .then(res => this.setState({ data: res.data, isLoading: false}))
        .catch(e => this.setState({ error: e, isError: true}))
    }
  
  
    render() {

      return (
        <div className="display-div">
            {this.state.isLoading && !this.state.isError && <Spinner />}
            {!this.state.isLoading && <DataTable data={this.state.data.tweetList}/>}
            {!this.state.isLoading && <div/>}
            {/*!this.state.isLoading && <TweetTable data={this.state.data.tweetList}/>*/}
            {this.state.isError  && <p>Error</p>}
        </div>
      );
    }
  }
  
  export default Display;