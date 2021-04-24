import React, { useState } from "react";
import "./App.css";
import Entry from "./Entry";
import Result from "./Result";

function App() {

  const [global, setGlobal] = useState()

  const callback = (data) => {
    setGlobal(data)
  }

  return (
    <div className="App">     
      <Entry parentCallback={callback}/>
     <Result name={global}/>
    </div>
  );
}

export default App;
