import { useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    console.log("rendered");
    
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
        finalCount += i;
    }
    return finalCount;
  },[inputValue]);
  
  return (
    <>
      <input
        type="text"
        placeholder="Enter a number"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>{" "}
      <br></br>
      Sum from 1 to {inputValue} is {count} <br></br>
      <button onClick={() => setCounter(counter + 1)}>
        Counter {counter}{" "}
      </button>
    </>
  );
}

export default App;
