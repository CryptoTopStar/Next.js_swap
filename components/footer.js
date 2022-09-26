import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

export default function Footer() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [width, setWidth] = useState('430px');
  let isDesktopOrLaptop = useMediaQuery({
    minWidth: 1440
  })
  let isLaptopOrMobile = useMediaQuery({
    minWidth: 430
  })
  useEffect(() => {
    console.log("-----userEffect-----");
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
    drawScreen()
    drawstyle()
  }, []);
  useEffect(() => {
    drawstyle()
  }, [isDesktopOrLaptop, isLaptopOrMobile])
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
  const [desktop, setDesktop] = useState(false)
  const drawScreen = () => {
    if (desktop) {
      return (
        <><div className='m-auto bg-37394d' style={{ width:width}}>
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
          </div>
        </>
      )
    }
    if (!desktop) {
      return (
        <div style={{ width:width}} className="m-auto">
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
        </div>
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
