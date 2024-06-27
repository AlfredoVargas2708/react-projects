import { useState } from "react";

const ColowSwitcher = () => {
  const [selectedColor, setSelectedColor] = useState();
  const colors = ["red", "blue", "green", "yellow"];
  return (
    <div>
      <select>
        {colors.map((color, index) => (
          <option
            key={index}
            value={color}
            onClick={(e) => setSelectedColor(e.target.value)}
          >
            {" "}
            {color}{" "}
          </option>
        ))}
      </select>
      <div style={{ backgroundColor: `${selectedColor}` }}>
        <h1> {selectedColor} </h1>
      </div>
    </div>
  );
};

export default ColowSwitcher;
