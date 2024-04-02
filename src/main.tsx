import React from 'react'
import ReactDOM from 'react-dom/client'
import TypeScriptApp from './App.tsx'
import JavaScriptApp from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JavaScriptApp />
  </React.StrictMode>
)
