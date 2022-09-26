import Link from 'next/link'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import ToggleBox from './navbar/toggleBox'
import Background from './swap/background'
import { useMediaQuery } from 'react-responsive'

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const [connectWalletButton, setConnectWalletButton] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktop, setDesktop] = useState(false)
  const [width, setWidth] = useState('430px');
  let isDesktopOrLaptop = useMediaQuery({
    minWidth: 1440
  })
  let isLaptopOrMobile = useMediaQuery({
    minWidth: 430
  })
  const drawstyle = () =>{
    if(isDesktopOrLaptop && isLaptopOrMobile ){
      setWidth('100vw')
    }
    if(!isDesktopOrLaptop && isLaptopOrMobile ){
      setWidth('1440px')
    }
    if(!isLaptopOrMobile && !isDesktopOrLaptop){
      setWidth('430px')
    }
  }
  console.log("desktop:",isDesktopOrLaptop)
  console.log("laptop:",isLaptopOrMobile)
  useEffect(() => {
    function handleResize() {
      // console.log(screen.width)
      if (screen.width > 429) {
        setDesktop(true);
        // console.log(desktop)
      }
      if (screen.width < 429) {
        // console.log("ok")
        setDesktop(false);
        // console.log(desktop)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize();
    drawstyle()
  }, []);
  useEffect(() => {
    drawstyle()
  }, [isDesktopOrLaptop, isLaptopOrMobile])
  const dropWalletBox = () => {
    if (connectWalletButton) {
      return <ToggleBox />;
    }
  }
  const drawDesktopUl = () => {
    if (!mobileMenuIsOpen) {
      return (
        <ul style={{ marginLeft: "60px", display: "inline-flex" }}>
          <li className="navbar_li" >
            <Link href=''>
              < a className='inline-block text-white'>SWAP</a>
            </Link>
          </li >
          <li className="navbar_li">
            <Link href='' >
              <a className='inline-block text-white md:block'>POOL</a>
            </Link>
          </li>
          <li className="navbar_li">
            <Link href=''>
              <a className='inline-block text-white md:block'>CHART</a>
            </Link>
          </li>

          <div
            className={cn(
              'flex justify-between',
              mobileMenuIsOpen ? `block` : `hidden`
            )}
          >
            <button
              type='button'
              className='inline-flex items-center text-base font-medium text-white rounded-md shadow-sm' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}
              onClick={() => setConnectWalletButton(!connectWalletButton)} >
              Connect Wallet{dropWalletBox()}
            </button>
          </div>
        </ul >
      );
    }
  }
  const drawDropdownButton = () => {
    if (mobileMenuIsOpen) {
      return (
        <button className='relative p-2 border-2 border-white rounded' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg
            className='fill-current desktop:h-8 laptop:h-6 phone:h-4 tablet:h-6'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
          {drawMobileMenu()}
        </button>
      );
    }
  }
  const drawBackground = () => {
    if (mobileMenuOpen)
      return <Background />;
  }
  const drawMobileMenu = () => {
    if (mobileMenuIsOpen) {
      return (
        <>
          <ul className='flex flex-col items-center menu-drop bg-b-body border-b-text' style={{ position: "absolute", top: "100px", padding: "40px 16px", marginLeft: "96px", width: "332px", alignItems: "center", border: "solid #20212b 1px", zIndex: "50" }}>
            <button
              type='button'
              className="text-white rounded-md "
              style={{ position: "relative", backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", padding: "22px 94px", borderRadius: "10px" }}>
              Launch App
            </button>
            <li className="mx-8 mt-2 mobileLi" >
              <Link href=''>
                <a className='inline-block px-4 py-4 text-white md:block'>SWAP</a>
              </Link>
            </li>
            <li className="mx-8 mt-2 mobileLi" >
              <Link href=''>
                <a className='inline-block px-4 py-4 text-white md:block'>POOL</a>
              </Link>
            </li>
            <li className="mx-8 mt-2 mobileLi" >
              <Link href=''>
                <a className='inline-block px-4 py-4 text-white md:block'>CHARTS</a>
              </Link>
            </li>
            <li className="mx-8 mt-2 mobileLi" >
              <Link href=''>
                <a className='inline-block px-4 py-4 text-white md:block'>$ARS on Uniswap</a>
              </Link>
            </li>
            <li className="mx-8 mt-2 mobileLi" >
              <Link href=''>
                <a className='inline-block px-4 py-4 text-white md:block'>Medium</a>
              </Link>
            </li>
            <li className="mx-8 mt-2 mobileLi" >
              <Link href=''>
                <a className='inline-block px-4 py-4 text-white md:block'>Twitter</a>
              </Link>
            </li>
            <li className="mx-8 mt-2 mobileLi" >
              <Link href=''>
                <a className='inline-block px-4 py-4 text-white md:block'>Telegram</a>
              </Link>
            </li>
            <li className="mx-8 mt-2 mobileLi" >
              <Link href=''>
                <a className='inline-block px-4 py-4 text-white md:block'>Discord</a>
              </Link>
            </li>
            <li className="mx-8 mt-2 mobileLi" >
              <Link href=''>
                <a className='inline-block px-4 py-4 text-white md:block'>Documentation</a>
              </Link>
            </li>
            <li className="mx-8 mt-2 mobileLi" >
              <Link href=''>
                <a className='inline-block px-4 py-4 text-white md:block'>Github</a>
              </Link>
            </li>

          </ul >

        </>
      )
    }
  }
  const drawScreen = () => {
    if (desktop) {
      return (
          <navbar className="m-auto border-b-2 bg-b-body border-b-text" style={{ width: width, borderBottom:"solid #f1f1f3 1px"}}>
            <div style={{ background: "#2b2d3c", zIndex: "100", width: "1440px", height: "80px", marginRight: "auto", marginLeft: "auto", marginTop: "0px", marginBottom: "0px" }} >
              <Link href='/'>
                <img style={{
                  marginLeft: "70px", width: "160px", height: "28px", marginRight: "0px", display: "inline"
                }}
                  src='/logo.svg'
                  alt='logo'
                />
              </Link>
              {drawDesktopUl()}
              <button
                type='button'
                className='relative flex flex-row items-center text-white rounded-md shadow-sm'
                style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", float: "right", marginRight: "70px", marginTop: "12px", padding: "18px 32px 18px 16px", paddingTop: "18px", fontSize: "16px" }} onClick={() => setConnectWalletButton(!connectWalletButton)}>
                01x3290...4454<img src='navbar/white_caret.svg' style={{ marginLeft: "12px", }} />
                {dropWalletBox()}
              </button>
              {drawDropdownButton()}
            </div>
            {drawBackground()}
          </navbar>
      )

    }
    if (!desktop) {
      return (
        <>
          <navbar className="flex flex-row items-center m-auto bg-b-body" style={{ background: "#2b2d3c", zIndex: "100", width: "430px", height: "107px", marginRight: "0", marginLeft: "0", marginTop: "0px", marginBottom: "0px", paddingTop: "50px" }} >
            <Link href='/'>
              <img style={{
                width: "137px", height: "24px", marginLeft: "16px", marginRight: "45px", marginTop: "8px"
              }}
                src='/logo.svg'
                alt='logo'
              />
            </Link>
            <button type='button' className='relative flex flex-row justify-center text-white rounded-md shadow-sm' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", marginTop: "0px", fontSize: "16px", lineHeight: "12px", height: "40px", padding: "14px 25px" }}>
              LAUNCH APP
            </button>
            <button><img src='/landingpage/list.svg' style={{ marginLeft: "26.5px", width: "32px" }} onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} />
            </button>
          </navbar>
          {drawMobileMenu()}
          {drawBackground()}
        </>
      )
    }
  }

  return drawScreen();



}
