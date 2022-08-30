// Search.js

import React, { Component } from "react";
import Search from './../search/Search'
import './Header.scss'

class Header extends Component {
  
    render() {
      return (
        <div className="header">
          <div className="flex-container">
            <div></div>
            <div className="bottom-container">
              <div className="search-container">
                <Search search= {this.props.search} />
              </div>
            </div>
          </div>
          
        </div>
      );
    }
  }
  
  export default Header;