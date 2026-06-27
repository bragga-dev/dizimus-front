// src/components/layout/dashboard/DashboardLayout.jsx
import { Outlet } from 'react-router-dom'
import { SidebarProvider, useSidebar } from '@/context/SidebarContext'
import Footer from '@/components/layout/Footer'
import DashboardSidebar from './DashboardSidebar'
import DashboardHeader from './DashboardHeader'
import Backdrop from './Backdrop'

function LayoutContent() {
  const { isExpanded, isHovered } = useSidebar()
  const isWide = isExpanded || isHovered

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <DashboardSidebar />
      <Backdrop />

      {/*
        Usamos uma <style> tag inline para aplicar o marginLeft reativo
        só em breakpoint lg+, evitando o problema do Tailwind v4 com
        classes arbitrárias geradas dinamicamente.
      */}
      <style>{`
        @media (min-width: 1024px) {
          .dashboard-main-content {
            margin-left: ${isWide ? '280px' : '80px'};
          }
        }
      `}</style>

      <div className="dashboard-main-content flex flex-col flex-1 transition-all duration-300 ease-in-out">
        <DashboardHeader />
        <main className="flex-1 px-4 md:px-6 py-8 mx-auto w-full max-w-screen-2xl">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  )
}