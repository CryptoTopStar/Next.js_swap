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
      if (window.innerWidth > 1024) {
        setMobileMenuIsOpen(false);
      }
      if (window.innerWidth < 1024) {
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
        <ul className='flex flex-row text-white'>
          {[
            { title: 'SWAP', route: '#' },
            { title: 'POOL', route: '#' },
            { title: 'CHARTS', route: '#' },
          ].map(({ route, title }) => (
            <li className="mx-8" key={title} >
              <Link href={route}>
                <a className='inline-block px-4 py-4 text-white md:block'>{title}</a>
              </Link>
            </li>
          ))}
          <div
            className={cn(
              'flex mt-6 justify-between',
              mobileMenuIsOpen ? `block` : `hidden`
            )}
          >
            <button
              type='button'
              className='inline-flex items-center px-10 py-2 text-base font-medium text-white rounded-md shadow-sm' style={{ position: "relative", backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}
              onClick={() => setConnectWalletButton(!connectWalletButton)} >
              Connect Wallet{dropWalletBox()}
            </button>
          </div>
        </ul>
      );
    }
  }
  const drawDropdownButton = () => {
    if (mobileMenuIsOpen) {
      return (
        <button className='relative p-2 border-2 border-white rounded' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg
            className='w-6 h-6 fill-current'
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
          <ul className='absolute right-0 flex flex-col m-auto border-2 rounded top-12 menu-drop bg-b-body w-96 border-b-text'>
            <button
              type='button'
              className='items-center px-10 py-2 m-auto mt-2 text-base font-medium text-white rounded-md shadow-sm'
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
      <navbar style={{ background: "#2b2d3c", borderBottom: "solid #494D66 1px", zIndex: "100" }} >
        <div className='flex flex-wrap items-center justify-between mr-2'>
          <div className='flex flex-row'>
            <div>
              <Link href='/'>
                <Image
                  className='p-0 m-0'
                  src='/logo.svg'
                  width={145}
                  height={50}
                  priority
                  alt='logo'
                />
              </Link>
            </div>
            {drawDesktopUl()}
          </div>
          <button
            type='button'
            className='items-center px-10 py-2 text-base font-medium text-white rounded-md shadow-sm'
            style={{ position: "relative", backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }} onClick={() => setConnectWalletButton(!connectWalletButton)}>
            Connect Wallet
            {dropWalletBox()}
          </button>
          {drawDropdownButton()}
        </div>
      </navbar>
      {drawBackground()}

    </>

  )
}
