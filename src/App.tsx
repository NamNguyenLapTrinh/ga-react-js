import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga4";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            ReactGA.event(
              {
                category: "Schedule",
                action: "click",
                label: "openTrade",
                value: 10,
              },
              {
                params: "openTrade",
              }
            );
          }}
        >
          send Ga2
        </button>
      </header>
    </div>
  );
}

export default App;
