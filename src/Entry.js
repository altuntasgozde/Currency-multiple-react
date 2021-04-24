import React, {useState} from "react";
import axios from 'axios';


function Entry({parentCallback}) {
    const [option, setOption] = useState();

    const [data, setData] = useState();
    
    const ChangeValue = (event) => {
      setData(event.target.value);
    };
  
    const ChangeButton = () => {
      if (option === "USD") {
        axios
          .get("https://api.exchangerate.host/latest?base=TRY")
          .then((response) => {
            const rates = response.data.rates.USD;
            const resultUsd = rates * data;
            parentCallback(resultUsd)
          });
      } else if (option === "EUR") {
        axios
          .get("https://api.exchangerate.host/latest?base=TRY")
          .then((response) => {
            const rates = response.data.rates.EUR;
            const resultEur = rates * data;
            parentCallback(resultEur)
          });
      } else if (option === "GBP") {
        axios
          .get("https://api.exchangerate.host/latest?base=TRY")
          .then((response) => {
            const rates = response.data.rates.GBP;
            const resultGbp = rates * data;
            parentCallback(resultGbp)
          });
      }
    };
  
    const ChangeOption = (event) => {
      setOption(event.target.value);
    };
  

  return (
    <div>
      <input type="text" value={data} onChange={ChangeValue}></input>
      <label>TL</label>
      <div className="radiobuttons" onChange={ChangeOption} value={option}>
        <input type="radio" value="USD" name="currency" /> USD
        <input type="radio" value="EUR" name="currency"/> EUR
        <input type="radio" value="GBP" name="currency"/> GBP
      </div>
      <button onClick={ChangeButton}>Change</button>

    </div>
  );
}

export default Entry;
