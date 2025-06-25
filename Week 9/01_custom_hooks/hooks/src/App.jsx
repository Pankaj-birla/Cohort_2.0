import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <SearchBar />
    </>
  );
}

function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const debounceValue = useDebounce(inputValue, 500); // milisecond
  // use the debounceValue in your component logic, e.g., trigger a search APi call via a useEffect
  return (
    <>
      <div>Debounce value is {debounceValue}</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Search..."
      />
    </>
  );
}

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const interval = setTimeout(() => {
      setDebounceValue(value);
    }, [delay]);

    return () => {
      clearTimeout(interval);
    };
  }, [value, delay]);

  return debounceValue;
}

export default App;
