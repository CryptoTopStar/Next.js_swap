import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
export default function Footer() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
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
  const drawUl = () => {
    if (!mobileMenuIsOpen)
      return (
        <ul className='flex space-x-6 text-center md:text-left' style={{ color: "#d9d9d9" }}>
          <li>
            <a
              href='https://design.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Medium
            </a>
          </li>

          <li>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      )
  }
  return (
    <>
      <section className='flex flex-wrap items-center justify-between'>
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
        {drawUl()}
        <button type='button' className='items-center hidden px-10 py-2 text-base font-medium text-white rounded-md shadow-sm md:inline-flex' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)" }}>LAUNCH APP </button>
      </section>
    </>
  )
}
