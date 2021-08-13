/** Stale useCallback sample bypass no-use-before-define */

import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  let logCount;
  const aboveFunction = useCallback(() => {
    logCount("Above count:"); // Above count: 0
  }, [logCount]);

  logCount = useCallback(
    (str) => {
      console.log(str, count);
    },
    [count]
  );

  const belowFunction = useCallback(() => {
    logCount("Below count:"); // Above count: 2
  }, [logCount]);

  return (
    <div className="App">
      <h1>
        Click increment button until count is 2, then click Above/ Below button
        and see console log
      </h1>
      <h2>You clicked {count} times!</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <button style={{ margin: 10 }} onClick={aboveFunction}>
          Above Increment Function
        </button>
        <button style={{ margin: 10 }} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button style={{ margin: 10 }} onClick={belowFunction}>
          Below Increment Function
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
