import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { CarritoProvider } from './context/CarritoProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import './admin.css'
import './Colores.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </BrowserRouter>
  </StrictMode>,
)
