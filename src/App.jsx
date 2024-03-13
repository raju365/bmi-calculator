import { useMemo } from "react";
import { useState } from "react";

function App() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(40);

  const onWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const onHeightChange = (e) => {
    setHeight(e.target.value);
  };
  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);
  return (
    <main>
      <h1>BMI calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight:{weight}kg</p>
        <input
          type="range"
          className="input-slider"
          step="1"
          min="20"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output">Height:{height}cm</p>
        <input
          type="range"
          className="input-slider"
          step="1"
          min="140"
          max="220"
          onChange={onHeightChange}
        />
        <div className="output-section">
          <p>Your BMI is</p>
          <p className="output">{output}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
