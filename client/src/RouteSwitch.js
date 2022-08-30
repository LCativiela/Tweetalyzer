import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Display from './components/display/Display'
import Header from './components/header/Header'

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
        <Route path="/" element={<Header />} />
        <Route path="/:hashtag" 
            element={   
                  <Full />            
            }
         />
        <Route path="*" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;