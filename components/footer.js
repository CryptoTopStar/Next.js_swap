import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
  <>
    <footer className='flex flex-wrap items-center justify-between sm:px-12 md:px-28 ' style={{background: "#2b2d2c"}}>
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
      <ul className='flex space-x-6 text-center md:text-left' style={{ color: "#d9d9d9"}}>
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
      <button type='button' className='items-center hidden px-10 py-2 text-base font-medium text-white rounded-md shadow-sm md:inline-flex' style={{ backgroundImage: "linear-gradient(to right, #F506FE , #06D6DF)"}}>LAUNCH APP </button>
    </footer>
    </>
  )
}
