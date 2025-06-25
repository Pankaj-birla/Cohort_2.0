import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import App from './GettodoById(useEffect).jsx'
// import App from './useMemoExample.jsx'
import App from './useCallBackExample.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <App />
    </StrictMode>
)
