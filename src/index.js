import React from "react";
import ReactDOM from "react-dom";
import LeetCode from "./LeetCode";
import "./styles.css";

function App() {
    return (
        <div className="App">
            <LeetCode></LeetCode>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
