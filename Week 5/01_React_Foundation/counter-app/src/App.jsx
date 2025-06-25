import { useState } from "react";

//Counter App
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
}

//component
function CustomButton(props) {
  function onButtonClick() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onButtonClick}>Counter {props.count}</button>;
}
export default App;
