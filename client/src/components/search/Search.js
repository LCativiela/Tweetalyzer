// Search.js
import React, { Component } from "react";
import { TextField } from'@mui/material';

import './Search.scss'


class Search extends Component {
  
    constructor(props){
      super(props)

      this.state = {
        initialState: this.props.search,
        value: this.props.search,
        navigate: false
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      if(this.props.search === undefined){
        this.setState( {value: ''})
      }
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {   
      if(this.state.value !== undefined && this.state.value !== '' 
        && this.state.value !== this.state.initialState){
          let route = this.state.value
          route = route.replace('#','')
          window.location.pathname = route
        

      }
      event.preventDefault();
    }
  
    
  
    render() {
      
      return (
          
          <form onSubmit={this.handleSubmit}>

            <div className = "search-box">

              <div className="text-container">
                <label>
                  <TextField fullWidth label="Hashtag" id="fullWidth" 
                  value={this.state.value} onChange={this.handleChange}/>
                </label>
              </div>

              <div className="button-container">
                <button className="button-9" type="submit">Search</button>       
              </div>
            </div>            
          </form>       
      );
    }
  }
  
  export default Search;