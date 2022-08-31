// Display.js

import React, { Component } from "react";
import DataTable from "./tweetTable/DataTable";
import Spinner from './Spinner';
import TagCloud from './tagCloud/TagCloud';
import EmptyQuery from './EmptyQuery'

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
      console.log(this.state.data)
      return (
        <div className="display_div">
            <div className="top_div">
              {!this.state.data.empty && !this.state.isLoading 
                && <DataTable data={this.state.data.tweetList}/>}
              {this.state.data.empty  && !this.state.isLoading 
                && <EmptyQuery/>}
             
              {this.state.isError  && <p>Error</p>}
              {this.state.isLoading && !this.state.isError && <Spinner />}
              
            </div>
            <div className="bottom_div">
              <div className="tag_cloud">
               {!this.state.data.empty && !this.state.isLoading 
                && <TagCloud data={this.state.data.hashtags}/>}
              </div>
            </div>            
        </div>
      );
    }
  }
  
  export default Display;