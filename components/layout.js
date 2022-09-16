import Navbar from './navbar'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="relative flex-1 bg-f1f1f3">{props.children}</main>
      <Footer />
    </div>
  )
}
