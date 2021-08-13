import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const count = useRef(1);

  const doSomething = useCallback(() => {
    console.log("count", count); // should be {count:1} but got {count:10}
    console.log("count", count.current); // should be 1 - Correct
    count.current = 10;
  }, [count]);

  useEffect(() => {
    console.log("useEffect!");
    doSomething();
  }, [doSomething]);

  return <div className="App"></div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/**
 showConsole, useBabelJS/ES2015
 <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.0/umd/react-dom.production.min.js"></script>
<div id="root"></div>


const {useRef,useCallback,useEffect} = React;
function App (){

  const count = useRef(1);

  const doSomething = useCallback(() => {
    console.log("count", count); // should be {count:1} but got {count:10}
    console.log("count", count.current); // should be 1 - Correct
    count.current = 10;
  }, [count]);

  useEffect(() => {
    console.log("useEffect!");
    doSomething();
  }, [doSomething]);
  
  return (
    <span/>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


 */
