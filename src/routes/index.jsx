// src/routes/index.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import RegisterChoice from '@/pages/Register/RegisterChoice'
import RegisterChurch from '@/pages/Register/RegisterChurch'
import RegisterMember from '@/pages/Register/RegisterMember'
import Contact from '@/pages/Contact'
import Pricing from '@/pages/Pricing'
import About from '@/pages/About'
import MainLayout from '@/components/layout/MainLayout'

// Redireciona para /login se não estiver autenticado
function PrivateRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  return user ? children : <Navigate to="/login" replace />
}

// Redireciona para /dashboard se já estiver logado
function PublicOnlyRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  return user ? <Navigate to="/dashboard" replace /> : children
}

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

        {/* Autenticação — bloqueadas para quem já está logado */}
        <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
        <Route path="/cadastro" element={<PublicOnlyRoute><RegisterChoice /></PublicOnlyRoute>} />
        <Route path="/cadastro/igreja" element={<PublicOnlyRoute><RegisterChurch /></PublicOnlyRoute>} />
        <Route path="/cadastro/membro" element={<PublicOnlyRoute><RegisterMember /></PublicOnlyRoute>} />

        {/* Rotas privadas — só acessíveis com login */}
        {/* <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
      </Routes>
    </BrowserRouter>
  )
}