// Search.js

import React, { Component } from "react";
import Search from './../search/Search'
import './Header.scss'

class Header extends Component {
  
    render() {
      return (
        <div className="header">
          <div className="flex_container">
            <div className="top-container">
              <h3><u>Tweetalyzer: </u> A Twitter analytics tool</h3>
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