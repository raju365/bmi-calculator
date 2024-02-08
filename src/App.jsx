import { useState } from "react";

import "./App.css";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  var reload = () => {
    window.location.reload();
  };

  //calculation logics
  const calculate = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      alert("Please enter a valid height and weight");
    } else {
      let bmi = weight / (height * 0.305 * height * 0.305);
      setBmi(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculate}>
          <div className="hieghtDiv">
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="hieghtDiv">
            <label>Height (m)</label>
            <input
              type="text"
              placeholder="Enter Height value"
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
          <div className="center">
            <h3>Your BIM is:{bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
