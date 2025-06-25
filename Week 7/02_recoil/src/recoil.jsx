import { countAtom, evenSelector } from "./store/atoms/count";
import {
  useSetRecoilState,
  RecoilRoot,
  useRecoilValue,
  useRecoilState,
} from "recoil";

// Recoil does not work with React 19 - it accesses private React internals,
//  which changed in 19 and that presumably has not been fixed.
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CounterRender />
      <Buttons />
    </div>
  );
}

function CounterRender() {
  const count = useRecoilValue(countAtom);
  return <div>Count : {count}</div>;
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom); // do we need count here. No!
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          {
            setCount((count) => count + 1);
          }
        }}
      >
        Increasing Count
      </button>

      <button
        onClick={() => {
          {
            setCount((count) => count - 1);
          }
        }}
      >
        Decreasing Count
      </button>
      <EvenCountRendered />

    </div>
  );
  function EvenCountRendered() {
    /*
    const count = useRecoilValue(countAtom);
     const isEven = useMemo(()=>{
        return count % 2 == 0
      },[count])
    */

    const isEven = useRecoilValue(evenSelector);    
    // const count = useRecoilValue(countAtom);
    // const isEven = count %2 == 0 ;
    return <div>{isEven ? "It is even" : null}</div>
  }
}

export default App;
