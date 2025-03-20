import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Compon_Suggestions from './components/Suggestions.jsx'
import Layout_Suggestions from './layout/Suggestions.jsx'
import './styles/Suggestions.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
