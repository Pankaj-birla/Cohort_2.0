import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './recoil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
