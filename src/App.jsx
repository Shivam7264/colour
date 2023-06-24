import './App.css'
import React from 'react';
import ColorPalette from './ColorPalette';
const App = () => {
  const handleColorSelect = (color) => {
    console.log('Selected color:', color);
  };

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#FFC0CB' ,'#800080', '#008080', '#00FFFF', '#008000','#FFFF00', '#800000','#000000','#808080'];

  return (
    <div className='main'>
      <h1>Color Palette</h1>
      <ColorPalette colors={colors} onSelectColor={handleColorSelect} />
    </div>
  );
};

export default App;

