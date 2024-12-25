import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.css'

import AppTurisztika from './AppTurisztika.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTurisztika />
  </StrictMode>,
)
