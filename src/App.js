import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [option, setOption] = useState();

  const [data, setData] = useState();

  const [newData, setNewData] = useState();

  const ChangeValue = (event) => {
    setData(event.target.value);
  };

  const ChangeButton = () => {
    if (option === "USD") {
      axios
        .get("https://api.exchangerate.host/latest?base=TRY")
        .then((response) => {
          const rates = response.data.rates.USD;
          setNewData(rates * data);
        });
    } else if (option === "EUR") {
      axios
        .get("https://api.exchangerate.host/latest?base=TRY")
        .then((response) => {
          const rates = response.data.rates.EUR;
          setNewData(rates * data);
        });
    } else if (option === "GBP") {
      axios
        .get("https://api.exchangerate.host/latest?base=TRY")
        .then((response) => {
          const rates = response.data.rates.GBP;
          setNewData(rates * data);
        });
    }
  };

  const ChangeOption = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className="App">
    
      <input type="text" value={data} onChange={ChangeValue}></input>
      <label>TL</label>
      <div className="radiobuttons" onChange={ChangeOption} value={option}>
        <input type="radio" value="USD" name="currency" /> USD
        <input type="radio" value="EUR" name="currency"/> EUR
        <input type="radio" value="GBP" name="currency"/> GBP
      </div>
      <button onClick={ChangeButton}>Change</button>
      <input type="text" value={newData}></input>
    </div>
  );
}

export default App;
