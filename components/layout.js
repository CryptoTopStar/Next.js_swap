import Navbar from './navbar'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1" style={{background: "white"}}>{props.children}</main>

      <Footer />
    </div>
  )
}
