// src/components/layout/dashboard/DashboardLayout.jsx
import { Outlet } from 'react-router-dom'
import { SidebarProvider, useSidebar } from '@/context/SidebarContext'
import DashboardSidebar from './DashboardSidebar'
import DashboardHeader from './DashboardHeader'
import Backdrop from './Backdrop'

function LayoutContent() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <DashboardSidebar />
        <Backdrop />
      </div>
      <div
        className={[
          'flex-1 transition-all duration-300 ease-in-out',
          isExpanded || isHovered ? 'lg:ml-[280px]' : 'lg:ml-[80px]',
        ].join(' ')}
      >
        <DashboardHeader />
        <main className="p-4 md:p-6 mx-auto max-w-screen-2xl">
          <Outlet />
        </main>
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