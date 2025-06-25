import { useState } from "react";

//todo Application
function Todo() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Going gym 6 to 7",
    },
    {
      title: "Learn New Skills",
      description: "Learn Full Stack 9-10",
    },
  ]);

  function addRandomTodo() {
    setTodos([
      ...todos,
      {
        title: "random Todo",
        description: "random Description",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addRandomTodo}>Add random Todo</button>
      {todos.map((todo) => {
        return (
          <CustomTodos
            title={todo.title}
            description={todo.description}
          ></CustomTodos>
        );
      })}
    </div>
  );
}

//component
function CustomTodos(props) {
  return (
    <div>
      <h1>Title : {props.title}</h1>
      <h2>Description: {props.description}</h2>
    </div>
  );
}

export default Todo;
