import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './landing.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
)
