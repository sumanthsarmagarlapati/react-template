import React from "react";
import { useCallback, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

//   const increment = () => {
//     console.log("Function recreated");
//     setCount(count + 1);
//   };

     const increment = useCallback(() => {
     console.log("Function recreated only when count changes");
     setCount(prev => prev + 1);
   }, []); // empty dependency

  return (
    <div style={{ background: dark ? "black" : "white" }}>
      <Child onClick={increment} />
      
      <h2>{count}</h2>

      <button onClick={() => setDark(prev => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
}

// when ever are using useCallback, we should also use React.memo for the child component to prevent unnecessary re-renders.
// React.memo will prevent the Child component from re-rendering unless its props change 
const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Increment</button>;
});


export default UseCallback;