import React from "react";
import WordCloud from "react-d3-cloud";
import './TagCloud.scss'
import { Divider } from "@mui/material";
const fontSize = (word) => word.value / 20;
const rotate = (word) => (word.value % 90) - 45;

function App(props) {
  const newData = props.data.map((item) => ({
    text: item.text,
    value:  item.value * 300
  }));
  return (
    <div className="box">
      <h2>Tag Cloud</h2>
      <Divider variant="middle" />
      <WordCloud
        width={800}
        height={550}
        data={newData}
        fontSize={fontSize}
        rotate={rotate}
        padding={2}
      />
    </div>
    
  );
}
export default App;

