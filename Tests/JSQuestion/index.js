import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  function equality() {
    console.log("start");
    const a = 1;
    const b = "1";
    console.log(a == b);
    console.log(a === b);
    const c = {};
    const d = {};
    console.log(c == d);
    console.log(c === d);
  }

  function eventLoop() {
    console.log(1);
    setTimeout(function () {
      console.log(2);
    }, 1000);
    setTimeout(function () {
      console.log(3);
    }, 0);
    Promise.resolve().then(() => console.log(5));
    console.log(4);
    // while (true) {}
  }

  useEffect(() => {
    // equality();
  }, []);

  return <div className="App"></div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
