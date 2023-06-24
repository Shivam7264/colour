import React, { useState } from 'react';
import './App.css'
const ColorPalette = ({ colors, onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    if (color === selectedColor) {
      setSelectedColor(null);
      onSelectColor(null);
    } else {
      setSelectedColor(color);
      onSelectColor(color);
    }
  };

  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`color-box ${color === selectedColor ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
