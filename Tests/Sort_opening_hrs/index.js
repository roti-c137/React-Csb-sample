import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
let testCases = [
  {
    title: "WeekDays",
    openingTimings: [
      {
        day: "Monday",
        startTime: "9:00 AM",
        endTime: "5:30 PM"
      },
      {
        day: "Tuesday",
        startTime: "9:00 AM",
        endTime: "5:30 PM"
      },
      {
        day: "Wednesday",
        startTime: "9:00 AM",
        endTime: "5:30 PM"
      },
      {
        day: "Thursday",
        startTime: "9:00 AM",
        endTime: "5:30 PM"
      },
      {
        day: "Friday",
        startTime: "9:00 AM",
        endTime: "5:30 PM"
      },
      {
        day: "Saturday",
        startTime: "1:00 AM",
        endTime: "10:30 PM"
      },
      {
        day: "Sunday",
        startTime: "1:00 AM",
        endTime: "10:30 PM"
      }
    ]
  }
];

function App() {
  testCases = testCases.map((obj) => {
    let temp = { title: obj.title };

    temp.lblLeft = obj.openingTimings.reduce(
      (total, openingTiming, index) => {
        console.log("openingTiming.day", openingTiming.day);
        if (index === 0) return openingTiming.day;
        return (total += `\n${openingTiming.day}`);
      },

      ""
    );

    temp.lblRight = obj.openingTimings.reduce(
      (total, openingTiming, index) => {
        console.log("openingTiming.day", openingTiming.day);
        if (index === 0)
          return `${openingTiming.startTime} - ${openingTiming.endTime}`;
        return (total += `\n${openingTiming.startTime} - ${openingTiming.endTime}`);
      },

      ""
    );
    return temp;
  });

  return (
    <div className="App">
      {testCases.map((obj) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            {`${obj.title}:`}
            <div
              style={{
                display: "flex",
                flex: 1
              }}
            >
              <pre style={{ textAlign: "left" }}>{obj.lblLeft}</pre>
              <pre style={{ textAlign: "right" }}>{obj.lblRight}</pre>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
