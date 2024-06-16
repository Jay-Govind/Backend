import { useState, useEffect } from "react";
import "./Counter.css";

export default function Counter() {
  let [count, setCount] = useState(0);

  const incCount = () => {
    setCount((currCount) => currCount + 1);
  };

  const decCount = () => {
    setCount((currCount) => currCount - 1);
  };

  useEffect(function print(){
    console.log("Hello Bachcha log ! 😂");
  })

  return (
    <div>
      <h1>Counter</h1>
      <span>Count : {count}</span>
      <br />
      <br />
      <button onClick={incCount}>+</button> &nbsp;
      <button onClick={decCount}>-</button>
    </div>
  );
}
