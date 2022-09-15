import Link from 'next/link'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import ToggleBox from './navbar/toggleBox'

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  useEffect(()=> {
    window.addEventListener('resize', ()=> {
        console.log( window.innerWidth)
        if( window.innerWidth > 640){
          setMobileMenuIsOpen(false);
        }
    })
  }, []);
  return (
    <navbar style={{ background : "#2b2d3c", borderBottom: "solid #494D66 1px"}}>
      <div className='flex flex-wrap items-center justify-between mt-2 sm:px-12 md:px-28 '>
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
        <button
          className='flex items-center px-3 py-2 text-white border border-white rounded md:hidden'
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className='w-3 h-3 fill-current'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
        <ul
          className={cn(
            'md:flex flex-col rounded shadow-sm md:bg-transparent md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto',
            mobileMenuIsOpen ? `block menu-drop` : `hidden`
          )}
        >
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
              className='inline-flex items-center px-10 py-2 text-base font-medium text-white rounded-md shadow-sm' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)"}}
            >
              Connect Wallet
            </button>
          </div>
        </ul>
        <button
          type='button'
          className='items-center hidden px-10 py-2 text-base font-medium text-white rounded-md shadow-sm md:inline-flex'
         style={{position: "relative", backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)"}}>
          Connect Wallet
          <ToggleBox/>
        </button>
      </div>
    </navbar>
  )
}
