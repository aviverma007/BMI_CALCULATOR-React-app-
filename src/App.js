// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [message, setMessage] = useState();

  //logic for calculating bmi values

  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      //
      if (bmi < 25) {
        setMessage("you are Underweight..!!");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage(" CONGRATS you are Healthy..!!");
      } else {
        setMessage("you are Overweight..!!");
      }
    }
  };
  //reload
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <div class="title">
          <h1>BMI CALCULATOR</h1>

          <a
            target="_blank"
            href="http://codepen.io/Moslim/"
            class="white-mode"
          ></a>
        </div>
        <form onSubmit={calcBmi}>
          <div>
            <label> Weight (lbs)</label>
            <input
              type="text"
              placeholder=" Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label> height (in)</label>
            <input
              type="text"
              placeholder=" Enter Height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="'center">
            <h3> Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
