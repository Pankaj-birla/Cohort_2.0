import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount}/>
    </div>
  );
}

// count doesnt need setCount but still we need to pass because Button component need it.  (this issue resolve using the Context API)
function Count({ count,setCount }) {
  return (
    <div>
      Count : {count}
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

function Buttons({ count, setCount }) {
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
      <br />
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
