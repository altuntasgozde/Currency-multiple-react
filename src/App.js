import React, { useState } from "react";
import "./App.css";
import Entry from "./Entry";
import Result from "./Result";

function App() {
  const [global, setGlobal] = useState();

  const callback = (data) => {
    setGlobal(data);
  };

  return (
    <div className="App">
      <h1>Currency App</h1>
      <div className="Part">
      <Entry parentCallback={callback} />
      <Result name={global} />
      </div>
    </div>
  );
}

export default App;
