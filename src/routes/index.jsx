// src/routes/index.jsx
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { ROLES, ROLE_HOME } from '@/lib/permissions'

import MainLayout from '@/components/layout/MainLayout'
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout'

import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import About from '@/pages/About'

import Login from '@/pages/Login'
import RegisterChoice from '@/pages/Register/RegisterChoice'
import RegisterChurch from '@/pages/Register/RegisterChurch'
import RegisterMember from '@/pages/Register/RegisterMember'

import EmailNotVerificado from '@/pages/EmailNotVerificado'
import ForgotPassword from '@/pages/ForgotPassword'
import ConfirmResetPassword from '@/pages/ConfirmResetPassword'
import VerifyEmail from '@/pages/VerifyEmail'
import EmailVerified from '@/pages/EmailVerified'

import Profile from '@/pages/dashboard/shared/Profile'

import MemberHome from '@/pages/dashboard/member/MemberHome'
import Contributions from '@/pages/dashboard/member/Contributions'
import MyChurch from '@/pages/dashboard/member/MyChurch'

import ChurchHome from '@/pages/dashboard/church/ChurchHome'
import Members from '@/pages/dashboard/church/Members'
import Finance from '@/pages/dashboard/church/Finance'
import Events from '@/pages/dashboard/church/Events'

import AdminHome from '@/pages/dashboard/admin/AdminHome'
import Churches from '@/pages/dashboard/admin/Churches'
import Users from '@/pages/dashboard/admin/Users'
import Reports from '@/pages/dashboard/admin/Reports'

import NotFound from '@/pages/NotFound'

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

function RoleRoute({ allowedRoles, children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  if (!user) return <Navigate to="/login" replace />
  if (user.role === ROLES.ADMIN) return children
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={ROLE_HOME[user.role] ?? '/dashboard'} replace />
  }
  return children
}

function RoleRedirect() {
  const { user } = useAuth()
  const to = ROLE_HOME[user?.role] ?? '/login'
  return <Navigate to={to} replace />
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/"        element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sobre"   element={<About />} />
        </Route>

        <Route path="/login"           element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
        <Route path="/cadastro"        element={<PublicOnlyRoute><RegisterChoice /></PublicOnlyRoute>} />
        <Route path="/cadastro/igreja" element={<PublicOnlyRoute><RegisterChurch /></PublicOnlyRoute>} />
        <Route path="/cadastro/membro" element={<PublicOnlyRoute><RegisterMember /></PublicOnlyRoute>} />

        <Route path="/verificar-email"             element={<EmailNotVerificado />} />
        <Route path="/resetar-senha"               element={<ForgotPassword />} />
        <Route path="/redefinir-senha/:uid/:token" element={<ConfirmResetPassword />} />
        <Route path="/verify-email/:uid/:token"    element={<VerifyEmail />} />
        <Route path="/verificacao-concluida"       element={<EmailVerified />} />

        <Route
          path="/dashboard"
          element={<PrivateRoute><DashboardLayout /></PrivateRoute>}
        >
          <Route index element={<RoleRedirect />} />
          <Route path="perfil" element={<Profile />} />

          <Route path="membro" element={<RoleRoute allowedRoles={[ROLES.MEMBER]}><Outlet /></RoleRoute>}>
            <Route index               element={<MemberHome />} />
            <Route path="contribuicoes" element={<Contributions />} />
            <Route path="minha-igreja"  element={<MyChurch />} />
          </Route>

          <Route path="igreja" element={<RoleRoute allowedRoles={[ROLES.CHURCH]}><Outlet /></RoleRoute>}>
            <Route index             element={<ChurchHome />} />
            <Route path="membros"    element={<Members />} />
            <Route path="financeiro" element={<Finance />} />
            <Route path="eventos"    element={<Events />} />
          </Route>

          <Route path="admin" element={<RoleRoute allowedRoles={[ROLES.ADMIN]}><Outlet /></RoleRoute>}>
            <Route index              element={<AdminHome />} />
            <Route path="igrejas"     element={<Churches />} />
            <Route path="usuarios"    element={<Users />} />
            <Route path="relatorios"  element={<Reports />} />
          </Route>

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}