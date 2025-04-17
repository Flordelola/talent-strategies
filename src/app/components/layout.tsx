import Header from './header'
import Footer from './footer'
 
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="bg-gray-200 min-h-screen grid grid-rows-[auto_1fr_auto]">
      <main className="container mx-auto bg-white/50 rounded-xl py-7 px-8 m-6 overflow-hidden">
      
      {children}</main>
      </div>
      <Footer />
    </>
  )
}