import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './view/App.jsx'

// scss
import './styles/style';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
