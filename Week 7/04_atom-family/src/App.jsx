import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { todoAtomFamily } from "./store/atoms/atom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <Updater />
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} /> <Todo id={2} /> <Todo id={2} /> <Todo id={2} />{" "}
        <Todo id={2} />
      </RecoilRoot>
    </>
  );
}

function Updater() {
  const updateTodo = useSetRecoilState(todoAtomFamily(2));

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: "2",
        title: "Study",
        description: "Go to Studies",
      });
    }, 5000);
  }, []);
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todoAtomFamily(id));

  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
      <br />
    </div>
  );
}

export default App;
