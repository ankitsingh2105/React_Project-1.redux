import "./styles.css";
// import One1 from "./One1.jsx";
// import One from "./One.jsx";
// import Second from "./Second";
// import Two from "./Two";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer, useRef } from "react";
export default function App() {
  const ank = useRef(null);
  const initial = {
    counter: 0,
    color: "red"
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { ...state, counter: state.counter + 1 };
      case "dec":
        return { ...state, counter: state.counter - 1 };
      case "ChangeColor":
        ank.current.style.background = state.color;
        return { ...state, color: state.color === "red" ? "skyblue" : "red" };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <div className="App">
      <h1>Welcome to redux</h1>
      <div>{state.counter}</div>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        Inc{" "}
      </button>{" "}
      &nbsp; &nbsp;
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        Dec
      </button>
      <br />
      <br />
      <div ref={ank} style={{ background: state.color }}>
        This is colring{" "}
      </div>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "ChangeColor" });
        }}
      >
        Change
      </button>
    </div>
  );
}
