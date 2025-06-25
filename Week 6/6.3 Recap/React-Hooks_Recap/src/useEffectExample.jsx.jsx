import { useState } from 'react'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  fetch("https://google.com", async (res) => {
    const json = await res.json();
    setBankData(json);
    // Assume it is { income: 100 }
  });

  setTimeout(() => {
    setExchangeData({
      returns: 100
    });
  }, 1000);

  const incomeTax = (bankData.income + exchangeData) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App