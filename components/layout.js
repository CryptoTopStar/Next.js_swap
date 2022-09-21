import Navbar from './navbar'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-b-body" >
      <Navbar />
      <main className="bg-white" style={{ width: "1440px", margin: "auto" }}>{props.children}</main>
      <Footer />
    </div>
  )
}
