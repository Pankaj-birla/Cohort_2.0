import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [buttonId, setButtonId] = useState("6818feee06fc4e486548e704");
  return (
    <>
      <button onClick={() => { setButtonId("6818feee06fc4e486548e704") }}> 1 </button>
      <button onClick={() => { setButtonId("6818ff3706fc4e486548e706") }}> 2 </button>
      <button onClick={() => { setButtonId("681914852eea3004ac6b744d") }}> 3 </button>
      <button onClick={() => { setButtonId("681919ca2eea3004ac6b7ffc") }}> 4 </button>

      
      <Todo id={buttonId}></Todo>
    </>
  );
}

function Todo({id}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      setTodos(res.data.Todos);
    });
  }, []);

  const result = todos.find((todo) => todo._id === id);

  return (
    <>
      {result ? (
        <>
          <h1>{result.title}</h1>
          <h1>{result.description}</h1>
        </>
      ) : (
        <h1>Loading or not found...</h1>
      )}
    </>
  );
}

export default App;
