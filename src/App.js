import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import st from "../src/assets/images/1st.png";
import Circle from "./components/circle/Circle";
const App = () => {
  //Giá trị khởi tạo
  const initialState = [0, 0, 0, 0, 0, 0];

  //State list có giá trị khởi tạo là initialState tức là  [0, 0, 0, 0, 0, 0];
  const [list, setList] = useState(initialState);

  //hàm random có tham số truyền vào là max tức là nếu gọi handleRandom(100) thì max là 100
  const handleRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  const onSubmit = () => {
    //tạo ra 1 mảng mới chưa giá trị của list
    const newList = [...list]; // cú pháp ... gọi là rest [...list] có nghĩa là tạo ra 1 mảng newList có giá trị là tất cả các giá trị của state list

    //phần tử newList thử i sẽ random bằng hàm handleRandom với tham số truyền vào là 10
    newList[0] = handleRandom(10);
    newList[1] = handleRandom(10);
    newList[2] = handleRandom(10);
    newList[3] = handleRandom(10);
    newList[4] = handleRandom(10);
    newList[5] = handleRandom(10);

    //sau khi đã random các số trong mảng thì ta setList có giá trị là mảng đã random ở đây là newList
    setList(newList);
    //bây giờ giá trị của list đã là 1 mảng gồm các số đã random của newList
  };

  return (
    <div className="App">
      {/* Component Header */}
      <Header />
      <div className="container">
        <h1>QUAY SỐ TRÚNG THƯỞNG</h1>
        <img src={st} alt="" />
        <div className="circle-container">
          {/* Dùng hàm map để lặp tất cả cá phần tử ở đây map list
           * vì list có 6 phần tử nên sẽ map ra được 6 cái <Circle/>
           * map chỉ được dùng cho mảng map gồm 3 tham số (item, index, arr)
           * item là phần tử trong mảng ví dụ có mảng [1,2,3,4,5] thì item = 1, item = 2, item = 3, ...
           * index là số thứ tự của phần tử trong mảng
           *
           */}
          {list.map((item, index) => {
            return (
              // Lưu ý khi map thì chúng ta nên cho nó 1 cái key, key này thường là index hoặc là Id vì nó không được trùng
              <div key={index}>
                {/* chuyền vào props number có giá trị là item tức là các item được map  */}
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
