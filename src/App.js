import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButton] = useState("red");
  const [isDisabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        onClick={() => setButton(newButtonColor)}
        style={{ backgroundColor: isDisabled ? "gray " : buttonColor }}
        disabled={isDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        onClick={() => setDisabled(!isDisabled)}
        type="checkbox"
        id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
