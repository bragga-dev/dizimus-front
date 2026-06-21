import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'

export default function MemberHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-zinc-900">Início — Membro</h1>
      </main>
      
      <Footer />
    </div>
  )
}