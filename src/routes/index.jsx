// src/routes/index.jsx (ou App.jsx)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Contact from '@/pages/Contact'
import Pricing from '@/pages/Pricing'
import About from '@/pages/About'
import MainLayout from '@/components/layout/MainLayout'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas com layout principal */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/precos" element={<Pricing />} />
          <Route path="/sobre" element={<About />} />
        </Route>
        
        {/* Rotas de autenticação SEM o layout principal */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Login />} /> {/* Opcional: mesma página com modo registro */}
        
        {/* Rotas protegidas (dashboard) */}
        {/* <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
      </Routes>
    </BrowserRouter>
  )
}