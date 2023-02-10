import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import WithImageGrid from "./components/homeComponetns/WithImageGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WithImageGrid />
    </div>
  );
}

export default App;
