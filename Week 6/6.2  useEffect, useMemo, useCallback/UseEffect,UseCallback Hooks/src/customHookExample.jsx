import { useEffect, useState } from "react";

//our custom hook always start with use
function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("").then((res) => {
        setTodos(res.data.Todos);
    });
  }, []);

  return todos;
}

function App() {
  const todos = useTodos();

  return <>{todos}</>;
}
