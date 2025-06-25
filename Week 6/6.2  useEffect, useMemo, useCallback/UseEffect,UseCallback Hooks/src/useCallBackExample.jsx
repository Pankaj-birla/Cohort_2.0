import { useCallback,memo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const onClick = useCallback(() => { 
    console.log("child clicked");
  }, []);
  return (
    <>
      <Child onClick={onClick} /> <br></br>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
    </>
  );
}

const Child = memo(({ onClick }) => {
  console.log("Child render");

  return (
    <>
      <button onClick={onClick}> Button Clicked </button>
    </>
  );
});

export default App;
