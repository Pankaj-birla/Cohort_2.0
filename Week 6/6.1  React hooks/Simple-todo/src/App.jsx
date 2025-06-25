import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //Week 5 backend to get all todo api
    fetch("http://localhost:3000/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.Todos);
    });
  }, []);

  return (
    <>
      <DisplayTodos todos={todos}></DisplayTodos>
    </>
  );
}

function DisplayTodos({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <div>
          <h1> {todo.title}</h1>
          <h1> {todo.description}</h1>
        </div>
      ))}
    </>
  );
}
export default App;
