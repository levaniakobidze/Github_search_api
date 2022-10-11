import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className='App'>
      <Home dark={dark} setDark={setDark} />
    </div>
  );
}

export default App;
