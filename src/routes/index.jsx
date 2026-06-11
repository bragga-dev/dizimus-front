// src/routes/index.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import RegisterChoice from '@/pages/Register/RegisterChoice'
import RegisterChurch from '@/pages/Register/RegisterChurch'
import RegisterMember from '@/pages/Register/RegisterMember'
import Contact from '@/pages/Contact'
import Pricing from '@/pages/Pricing'
import About from '@/pages/About'
import MainLayout from '@/components/layout/MainLayout'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas com layout principal (Header + Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/precos" element={<Pricing />} />
          <Route path="/sobre" element={<About />} />
        </Route>

        {/* Autenticação — sem layout principal */}
        <Route path="/login" element={<Login />} />
        
        {/* Rotas de registro - usando /register */}
        <Route path="/cadastro" element={<RegisterChoice />} />
        <Route path="/cadastro/igreja" element={<RegisterChurch />} />
        <Route path="/cadastro/membro" element={<RegisterMember />} />

        {/* <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
      </Routes>
    </BrowserRouter>
  )
}