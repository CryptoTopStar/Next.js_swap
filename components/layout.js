import Navbar from './navbar'
import Footer from './footer'
import { useEffect, useState } from 'react'

export default function Layout(props) {
  const [desktop, setDesktop] = useState(false)



  useEffect(() => {

    console.log(screen.width)
    if (screen.width > 429) {
      setDesktop(true);
    }
    if (screen.width < 429) {
      setDesktop(false);
    }

  }, []);
  const drawmain = () => {
    {
      if (desktop) {
        return (<main className="bg-white" style={{ width: "1440px", marginRight: "auto", marginLeft: "auto" }}>{props.children}</main>)
      }
      if (!desktop) {
        return (<main className="bg-white" style={{ width: "430px", marginRight: "0", marginLeft: "0" }}>{props.children}</main>)
      }
    }
  }
  return (
    <>
      <div className="flex flex-col min-h-screen bg-b-body" >
        <Navbar />
        {drawmain()}
        <Footer />

      </div>
    </>

  )
}
