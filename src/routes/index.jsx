// src/routes/index.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import RegisterChoice from '@/pages/Register/RegisterChoice'
import RegisterChurch from '@/pages/Register/RegisterChurch'
import RegisterMember from '@/pages/Register/RegisterMember'
import EmailNotVerificado from '@/pages/EmailNotVerificado'
import ForgotPassword from '@/pages/ForgotPassword'
import ConfirmResetPassword from '@/pages/ConfirmResetPassword'
import VerifyEmail from '@/pages/VerifyEmail'
import EmailVerified from '@/pages/EmailVerified'

// dentro de <Routes>:
import Contact from '@/pages/Contact'
import About from '@/pages/About'
import MainLayout from '@/components/layout/MainLayout'

function PrivateRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  return user ? children : <Navigate to="/login" replace />
}

function PublicOnlyRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  return user ? <Navigate to="/dashboard" replace /> : children
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas com layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sobre" element={<About />} />
        </Route>

        {/* Autenticação */}
        <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
        <Route path="/cadastro" element={<PublicOnlyRoute><RegisterChoice /></PublicOnlyRoute>} />
        <Route path="/cadastro/igreja" element={<PublicOnlyRoute><RegisterChurch /></PublicOnlyRoute>} />
        <Route path="/cadastro/membro" element={<PublicOnlyRoute><RegisterMember /></PublicOnlyRoute>} />

        {/* Página de aviso — email não verificado (pública, sem guard) */}
        <Route path="/verificar-email" element={<EmailNotVerificado />} />
        <Route path="/resetar-senha" element={<ForgotPassword />} />
        <Route path="/redefinir-senha/:uid/:token/" element={<ConfirmResetPassword />} />
        <Route path="/verify-email/:uid/:token/" element={<VerifyEmail />} />
        <Route path="/verificacao-concluida" element={<EmailVerified />} />


        {/* Rotas privadas */}
        {/* <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
      </Routes>
    </BrowserRouter>
  )
}