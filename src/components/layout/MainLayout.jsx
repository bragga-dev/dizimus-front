import Header from './header/Header'
import Footer from './Footer'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}