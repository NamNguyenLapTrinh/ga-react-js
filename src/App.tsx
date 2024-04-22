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
            ReactGA.event({
              category: "Schedule",
              action: "bookmarksClick",
              label: "bookmarks",
            });
          }}
        >
          send Ga
        </button>
      </header>
    </div>
  );
}

export default App;
