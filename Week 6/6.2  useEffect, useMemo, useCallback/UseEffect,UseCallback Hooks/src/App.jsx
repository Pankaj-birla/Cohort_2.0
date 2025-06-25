import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      setTodos(res.data.Todos);
    });
  },[]);

  return (
    <>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description}></Todo>
      ))}
    </>
  );
}
function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </>
  );
}
export default App;
