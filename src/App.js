import React, { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn); 
  };  
  return (
    <div>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleSwitch}>Toggle</button>
    </div>
  );
}

export default ToggleSwitch;
