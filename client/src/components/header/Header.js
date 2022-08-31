// Search.js

import React, { Component } from "react";
import Search from './../search/Search'
import './Header.scss'
import logo from '../../resources/logo.png'
import github from '../../resources/github.png'
class Header extends Component {
  
    render() {
      return (
        <div className="header">
          <div className="flex_container">
            <div className="top_container">
              <div>               
                  <a href="/">
                    <img className= "logo" src={logo} alt="Logo"/>
                  </a>
              </div>
              <div className="title">
                <h1>TWEETALYZER</h1>
              </div>
              <div>
                <p className="github-container"><p>By Lorenzo Cativiela </p>
                  <a href="https://github.com/LCativiela" target="_blank" rel="noreferrer"><img className= "github" src={github} alt="Tet"/></a>
                </p>
              </div>
              
            </div>
            <div className="bottom_container">
              <div className="search_container">
                <div/>
                <div>
                  <Search search= {this.props.search} />
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      );
    }
  }
  
  export default Header;