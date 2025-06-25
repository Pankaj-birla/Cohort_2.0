import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "After Office Learn Web development Course",
      description: "Timing 6:30 to 7:15",
    },
    {
      title: "After That Do Some Assignments",
      description: "Timing 7:15 to 10:15",
    },
  ]);

  function AddTodo() {
    setTodos([...todos,{
        title : "hey baby",
        description : "Nice "
    }])

}

  return (
    <div>
      <button onClick={AddTodo}>Add Another Todo After Assignment</button>
      {todos.map((todo) => (
        <MyPersoanlTodo
          title={todo.title}
          description={todo.description}
        ></MyPersoanlTodo>
      ))}
    </div>
  );
}


function MyPersoanlTodo(props) {
  return (
    <div>
      <h2>Title : {props.title} </h2>
      <h2>Description : {props.description} </h2>
    </div>
  );
}

export default App;
