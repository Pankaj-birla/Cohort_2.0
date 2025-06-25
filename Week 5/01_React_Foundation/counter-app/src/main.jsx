import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Todo from './Todo.jsx'
import MyPersonalTodo from './MyPersonalTodo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyPersonalTodo />
  </StrictMode>,
)
