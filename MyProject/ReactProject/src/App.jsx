import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import Hello from "./component/Hello";
import Fruit from "./component/Fruit";
function App() {
  // const [count, setCount] = useState(0)
  const seatNum = [1, 3, 4];
  const person = {
    name: "John",
    message: `I am John and I love React!`,
    seatNum: seatNum,
  };
  return (
    <div className="App">
      <Hello person={person} />
      <Fruit />
    </div>
    /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
    </div>*/
  );
}

export default App;
