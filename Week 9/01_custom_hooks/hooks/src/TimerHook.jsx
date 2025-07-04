import { useEffect, useState } from "react";

function useInterval(fn, number) {
  useEffect(() => {
    const value = setInterval(fn, number);
    return ()=>{
        clearInterval(value);
    }
  });
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return <>Timer is at {count}</>;
}

export default App;
