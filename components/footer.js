import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Footer() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  useEffect(() => {
    console.log(window.innerWidth)
    if (screen.width > 429) {
      setMobileMenuIsOpen(false);
      setDesktop(true);
    }
    if (screen.width < 429) {
      setMobileMenuIsOpen(true);
      setDesktop(false);
    }
  }, []);
  const [desktop, setDesktop] = useState(false)
  const drawScreen = () => {
    if (desktop) {
      return (
        <>
          <section className='flex flex-wrap items-center justify-between' style={{ width: "1440px", margin: "auto", padding: "40px 70px", background: "#37394d" }}>
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
            <button type='button' className='items-center' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)", padding: "22px 76px", borderRadius: "10px", fontWeight: "600" }}>LAUNCH APP </button>
          </section>
        </>
      )
    }
    if (!desktop) {
      return (

        <section className='flex flex-wrap items-center justify-between' style={{ width: "430px", margin: "0", padding: "18px", background: "#37394d" }}>

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
          <button><img src='/landingpage/list.svg' style={{ marginLeft: "26.5px", width: "32px" }} onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} />
          </button>

        </section>
      )
    }

  }
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
  return drawScreen()
}
