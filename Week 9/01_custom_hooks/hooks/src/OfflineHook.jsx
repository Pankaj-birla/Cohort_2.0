import { use, useEffect, useState } from "react";
   
function useIsOnline() {
  const [isAvailable, setIsAvailable] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => setIsAvailable(true));
    window.addEventListener("offline", () => setIsAvailable(false));
  },[]);

  return isAvailable;
}

function App() {
  const isOnline = useIsOnline();

  return (
    <>
      {isOnline
        ? "You are online Yay!!"
        : "You are offline, please connect to the internet"}
    </>
  );
}

export default App;
