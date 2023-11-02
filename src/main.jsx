import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Element HTML où brancher notre noeu REACT:
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
