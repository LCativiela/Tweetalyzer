import React from "react";
import './Hello.scss'
import Banner from '../../resources/twitterBanner.jpg'

function App() {
  return (
    <div className="hello">
      <div className="hello-container">
        <h1>Hello, welcome to Tweetalyzer!</h1>
        <div className="hello-half">
          <div className="hello-text">
            <p>This App allows you to investigate a Hashtag, and discover which 
              other trends are connected to it. 
            </p>
            <p>
              This way, you can understand common trends, niches,
              and shared interests. Feel free to explore!
            </p>

          </div>
          <div className="image-container">
            <img src={Banner} alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default App;

