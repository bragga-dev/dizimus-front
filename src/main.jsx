import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes/index'

import './styles/globals.css'
import './styles/theme.css'
import './styles/animations.css'
import './styles/utilities.css'
import './styles/scrollbar.css'
import './styles/fonts.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </StrictMode>,
)