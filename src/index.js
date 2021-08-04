/**
  Click increment button until count is 2, then click 
  Above and Below button and check console log
 * Even though the count value is > 0, aboveIncrement console.log(count) still gives 0
 */

import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  /** Assuming all the functions below do some intensive stuffs to justify useCallback */
  const aboveFunction = useCallback(() => {
    // ...do other intensive stuff
    logCount("Above count:"); // Above count: 0
  }, [logCount]);

  const logCount = useCallback(
    (str) => {
      // ...do other intensive stuff
      console.log(str, count);
    },
    [count]
  );

  const belowFunction = useCallback(() => {
    // ...do other intensive stuff
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
        <button style={styles.btnView} onClick={aboveFunction}>
          Above Increment Function
        </button>
        <button style={styles.btnView} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button style={styles.btnView} onClick={belowFunction}>
          Below Increment Function
        </button>
      </div>
    </div>
  );
}

const styles = { btnView: { margin: 10 } };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
