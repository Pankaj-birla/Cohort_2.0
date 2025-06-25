import { useState } from "react";
let counter = 4;
function Todo() {
  const [todo, setTodos] = useState([
    {
      id : 1,
      title: "Hello World 1",
      description: "Hi 1",
    },
    {
      id : 2,
      title: "Hello World 2",
      description: "Hi 2",
    },
    {
      id: 3,
      title: "Hello World 3",
      description: "Hi 3",
    },
  ]);

  function addTodo(){
    setTodos([
      ...todo,
      {
        id : counter++,
        title: `Hello World ${Math.random()}`,
        description: `Hi ${Math.random()}`,
      },
    ]);
  }

  return (
    <>
      <button
        onClick={addTodo}
      >
        Add a new todo
      </button>
      {todo.map((todo) => (
        <TodoPrint key = {todo.id} title={todo.title} description={todo.description}></TodoPrint>
      ))}
    </>
  );
}

function TodoPrint(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <h2>{props.description}</h2>
    </>
  );
}

export default Todo;
