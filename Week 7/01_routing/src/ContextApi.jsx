import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CounterRender />
      <Buttons  />
    </div>
  );
}

function CounterRender() {
    const {count} = useContext(CountContext);
  return <div>Count : {count}</div>;
}

function Buttons() {
    const {count, setCount} = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          {
            setCount(count + 1);
          }
        }}
      >
        Increasing Count
      </button>
      
      <button
        onClick={() => {
          {
            setCount(count - 1);
          }
        }}
      >
        Decreasing Count
      </button>
    </div>
  );
}

export default App;
