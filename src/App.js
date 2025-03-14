import Box from "./Box";
import Search from "./Search";
import { useState } from "react";

function App() {
  const [ color, setColor ] = useState('');
  const [ hexValue, setHexValue ] = useState('');
  return (
    <div className="app">
      <Box 
        color={color}
        hexValue={hexValue}
      />
      <Search 
        color={color}
        setColor={setColor}
        hexValue={hexValue}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
