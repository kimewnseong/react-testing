import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = color === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : color }}
        onClick={() => setColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={disabled}
        onChange={() => setDisabled((prev) => !prev)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
