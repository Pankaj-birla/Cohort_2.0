import { useEffect, useState } from "react";
import axios from "axios";

const useTodo = (number) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, number * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });

    return () => {
      clearInterval(value); 
    }
  }, [number]);

  return { todos, loading };
};

function App() {
  const { todos, loading } = useTodo(5);

  return (
    <>{loading ? "Loading ... " : todos.map((todo) => <Track todo={todo} />)}</>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;

// easy bits:
// import useSWR from 'swr'

// // const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async function(url) {
//   const data = await fetch(url);
//   const json = await data.json();
//   return json;
// };

// function Profile() {
//   const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello, you have {data.todos.length} todos!</div>
// }