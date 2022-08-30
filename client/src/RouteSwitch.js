import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Display from './components/display/Display'
import Search  from "./components/search/Search";

const Full = () => {
  const { hashtag } = useParams();

  return (
    <div>
      <Search search={hashtag}/>
      <Display search={hashtag}/>
    </div>
  );
};


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:hashtag" 
            element={
                <div>    
                  <Full />              
                </div>                
            }
         />
        <Route path="*" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;