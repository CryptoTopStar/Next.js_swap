import Navbar from './navbar'
import Footer from './footer'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Layout(props) {
  const [desktop, setDesktop] = useState(false)
  const [width, setWidth] = useState('430px');

  const isDesktopOrLaptop = useMediaQuery({minWidth: 1440})
  const isLaptopOrMobile = useMediaQuery({minWidth: 430})
  useEffect(() => {
    function handleResize() {
      if (screen.width > 429) {
        setDesktop(true);
      }
      if (screen.width < 429) {
        setDesktop(false);
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize();
    drawstyle();
  }, []);
  
  const drawmain = () => {
    {
      if (desktop) {
        return (<main className=" bg-f1f1f3" >{props.children}</main>)
      }
      if (!desktop) {
        return (<main className="bg-f1f1f3">{props.children}</main>)
      }
    }
  }

  useEffect(() => {
    drawstyle()
  }, [isDesktopOrLaptop, isLaptopOrMobile])
  
  const drawstyle = () =>{
    // console.log("drawstyle func");
    console.log({isLaptopOrMobile, isDesktopOrLaptop})
    if(!isLaptopOrMobile && !isDesktopOrLaptop){
      setWidth("430px");
    }
    if(!isDesktopOrLaptop && isLaptopOrMobile ){
      setWidth("1440px");
    } 
    
    if(isDesktopOrLaptop && isLaptopOrMobile ){
      setWidth("100vw");
    }
  }

  // const test = () => {
  //   if(!isDesktopOrLaptop && !isLaptopOrMobile ) return {width:"430px"};
  //   if(!isDesktopOrLaptop && isLaptopOrMobile ) return {width:"1440px"};
  //   if(isDesktopOrLaptop && isLaptopOrMobile ) return {width:"100vW"};
  // }
 
  return (
    <>
      <div className="min-h-screen mx-auto mr-auto overflow-x-hidden" style={{width: width}}>
        <Navbar />
        {drawmain()}
        <Footer />
      </div>
    </>

  )
}
