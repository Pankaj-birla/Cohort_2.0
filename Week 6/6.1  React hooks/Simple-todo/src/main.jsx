import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo from './Todo.jsx'
import Wrapper from './Wrapper.jsx'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
