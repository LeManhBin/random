import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import st from "../src/assets/images/1st.png";
import Circle from "./components/circle/Circle";
const App = () => {
  const initialState = [0, 0, 0, 0, 0, 0];
  const [list, setList] = useState(initialState);

  const handleRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  const onSubmit = () => {
    const newList = [...list];
    newList[0] = handleRandom(10);
    newList[1] = handleRandom(10);
    newList[2] = handleRandom(10);
    newList[3] = handleRandom(10);
    newList[4] = handleRandom(10);
    newList[5] = handleRandom(10);
    setList(newList);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>QUAY SỐ TRÚNG THƯỞNG</h1>
        <img src={st} alt="" />
        <div className="circle-container">
          {list.map((item, index) => {
            return (
              <div key={index}>
                <Circle number={item} />
              </div>
            );
          })}
        </div>
        <div className="action">
          <button className="btn-submit" onClick={onSubmit}>
            Nhấn
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
