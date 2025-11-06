import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import '../node_modules/bootstrap-icons/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App, { App1 } from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App1/>
  </StrictMode>,
)
