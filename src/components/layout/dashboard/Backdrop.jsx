// src/components/layout/dashboard/Backdrop.jsx
import { useSidebar } from '@/context/SidebarContext'

export default function Backdrop() {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar()
  if (!isMobileOpen) return null
  return (
    <div
      className="fixed inset-0 z-40 bg-[#0c0620]/80 backdrop-blur-sm lg:hidden"
      onClick={toggleMobileSidebar}
    />
  )
}