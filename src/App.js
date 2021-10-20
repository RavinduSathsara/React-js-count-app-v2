import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //format result
  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };
  //Color format
  const colorFormat = () => {
    return count === 0
      ? "badge m-2 badge-warning"
      : count < 0
      ? "badge m-2 badge-danger"
      : "badge m-2 badge-primary";
  };
  const removeCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Count app</h1>
      <span className={colorFormat()} style={{ fontSize: 30 }}>
        {formatCount()}
      </span>
      <hr />
      <button className="btn btn-danger m-3 " onClick={removeCount}>
        Dicreesment
      </button>
      <button className="btn btn-warning m-3" onClick={resetCount}>
        Reset
      </button>
      <button className="btn btn-primary m-3" onClick={addCount}>
        Increesment
      </button>
    </div>
  );
}

export default App;
