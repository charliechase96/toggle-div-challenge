import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [isHidden, setIsHidden] = useState(false);

  function handleClick(event) {
    setIsHidden(!isHidden);
  }

  return (
    <div>
      <button onClick={handleClick}>{isHidden ? "Unhide" : "Hide"}</button>
      {isHidden ? null : (
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      )}
    </div>
  );
}
