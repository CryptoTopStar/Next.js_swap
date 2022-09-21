import Link from 'next/link'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import ToggleBox from './navbar/toggleBox'
import Background from './swap/background'

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const [connectWalletButton, setConnectWalletButton] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log(window.innerWidth)
      if (window.innerWidth > 429) {
        setMobileMenuIsOpen(false);
      }
      if (window.innerWidth < 429) {
        setMobileMenuIsOpen(true);
      }

    })
  }, []);
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
    if (mobileMenuOpen) {
      return (
        <>
          <ul className='absolute right-0 flex flex-col m-auto border-2 rounded top-12 menu-drop bg-b-body border-b-text'>
            <button
              type='button'
              className='items-center px-10 py-2 m-auto mt-2 font-medium text-white rounded-md shadow-sm desktop:text-xl laptop:text-lg tablet:text-base phone:text-sm'
              style={{ position: "relative", backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}>
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

  console.log(connectWalletButton);

  return (
    <>
      <navbar className="border-b-2 bg-b-body border-b-text" style={{ background: "#2b2d3c", zIndex: "100", width: "1440px", height: "80px", margin: "auto", marginTop: "0px" }} >
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
      </navbar>
      {drawBackground()}
    </>

  )
}
