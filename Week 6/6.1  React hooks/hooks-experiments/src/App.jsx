import { memo, useState } from "react";

function App() {
  const [title, setTitle] = useState("My name is Harkirat");

  return (
    //<React.Fragment> or <Fragement>
    <div>
      <button
        onClick={() => {
          setTitle(`My name is ${Math.random()}`);
        }}
      >
        Click me to change the title
      </button>
      <Headers title={title}></Headers>
      <Headers title="My name is Raman"></Headers>
      <Headers title="My name is Raman"></Headers>
      <Headers title="My name is Raman"></Headers>
      <Headers title="My name is Raman"></Headers>
    </div>
    //</ React.Fragment> or </Fragement>
  );
}

// function HeaderWithButton() {
//   const [title, setTitle] = useState("My name is Harkirat");

//   function onButtonClick() {
//     setTitle(`My name is ${Math.random()}`);
//   }

//   return (
//     <>
//       <button onClick={onButtonClick}>Click me to change the title</button>
//       <Headers title={title}></Headers>
//     </>
//   );
// }

// function Headers({ title }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   );
// }

const Headers = memo(function Headers({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
});

export default App;
