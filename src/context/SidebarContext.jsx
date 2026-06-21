// src/context/SidebarContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const SidebarContext = createContext(null)

export function SidebarProvider({ children }) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isHovered, setIsHovered]   = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleSidebar       = useCallback(() => setIsExpanded(v => !v), [])
  const toggleMobileSidebar = useCallback(() => setIsMobileOpen(v => !v), [])

  return (
    <SidebarContext.Provider value={{
      isExpanded,
      isHovered,
      isMobileOpen,
      setIsHovered,
      toggleSidebar,
      toggleMobileSidebar,
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar deve ser usado dentro de <SidebarProvider>')
  return ctx
}