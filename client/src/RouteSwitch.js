import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Display from './components/display/Display'
import Header from './components/header/Header'
import Hello from './components/display/Hello'

const Full = () => {
  const { hashtag } = useParams();

  return (
    <div className="app" style={{width: "100%"}} >
      <Header search={hashtag}/>
      <Display search={hashtag}/>
    </div>
  );
};


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="app" style={{width: "100%"}} >
            <Header />
            <Hello />
          </div>
        } />
        <Route path="/:hashtag" 
            element={   
                  <Full />            
            }
         />
        <Route path="*" element={
          <div className="app" style={{width: "100%"}} >
            <Header />
            <Hello />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;