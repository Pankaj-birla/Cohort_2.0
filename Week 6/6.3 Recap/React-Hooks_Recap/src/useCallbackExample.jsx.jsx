import { useEffect, useState } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    })
  }, [])

//useCallback is not about minzimising the amt of code that is run
//useCallback is about the unnecessary rendering the component or code, if the fn doesnt need to change across render
  const calculateCryptoReturns = useCallback(()=>{
	  	return exchange1Data.returns + exchange2Data.returns;
  },[exchange1Data,exchange2Data])
  
  // Important : when we use useMemo it return value while useCallback returns the fn
  
  const incomeTax = (calculateCryptoReturns + bankData.income) * 0.3

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App