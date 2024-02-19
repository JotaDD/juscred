'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Link as ReactLink } from 'react-scroll'
import MenuIcon from '../MenuIcon'

function NavBar() {
  const [menuOn, setMenu] = useState(false)
  const [header, setHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setHeader(true)
      } else {
        setHeader(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [header])
  // "w-52 lg:w-64"
  return (
    <header
      className={`flex justify-center items-center py-3 w-full fixed top-0 left-0 z-[9999]
      ${header || menuOn ? 'bg-jc-dark-blue ' : 'bg-transparent'}`}
    >
      <div className="flex justify-between items-center w-[80%] lg:w-[85%] max-w-[1400px] py-1">
        <Link href="/">
          <Image
            className="w-48"
            src="/FullLogo.png"
            alt="document image"
            width="350"
            height="1"
          />
        </Link>
        {/* Menu for desktop */}
        <ul className={`${menuOn ? 'hidden' : ''} hidden lg:flex gap-6`}>
          <li className="text-jc-white p-4 rounded-lg hover:text-jc-light-yellow hover:transition-colors hover:duration-500 hover:bg-opacity-10">
            <ReactLink
              activeClass="active"
              to="home-component"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              href="/"
            >
              Home
            </ReactLink>
          </li>
          <li className="text-jc-white p-4 rounded-lg hover:text-jc-light-yellow hover:transition-colors hover:duration-500 hover:bg-opacity-10">
            <ReactLink
              activeClass="active"
              to="how-works-component"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              href="/"
            >
              Como funciona
            </ReactLink>
          </li>
          <li className="text-jc-white px-4 pt-4 pb-2 rounded-lg hover:text-jc-light-yellow hover:transition-colors hover:duration-500 hover:bg-opacity-10">
            <ReactLink
              activeClass="active"
              to="about-us-component"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="/"
            >
              Quem somos
            </ReactLink>
          </li>
          <li className="text-jc-white p-4 rounded-lg hover:text-jc-light-yellow hover:transition-colors hover:duration-500 hover:bg-opacity-10">
            <ReactLink
              activeClass="active"
              to="faq-component"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="/"
            >
              Perguntas frequentes
            </ReactLink>
          </li>
          <li className="text-jc-white p-4 rounded-lg hover:text-jc-light-yellow hover:transition-colors hover:duration-500 hover:bg-opacity-10">
            <ReactLink
              activeClass="active"
              to="contact-component"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              href="/"
            >
              Fale conosco
            </ReactLink>
          </li>
        </ul>

        {/* Menu for mobile */}
        <button onClick={() => setMenu(!menuOn)} className="lg:hidden">
          <MenuIcon isOpen={menuOn} />
        </button>
        <ul
          className={`${menuOn ? 'flex bg-jc-dark-blue ' : 'hidden'} lg:hidden  flex-col items-center fixed inset-0 top-16 w-full p-5 pt-10 pb-10  backdrop-blur-md`}
        >
          <li className=" mb-1 text-center border-b-[0.5px] w-[80%] text-xl pt-3 pb-2 text-jc-white font-semibold">
            <ReactLink
              onClick={() => setMenu(!menuOn)}
              activeClass="active"
              to="home-component"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              href="/"
            >
              Home
            </ReactLink>
          </li>
          <li className=" border-b-[0.5px] w-[80%] border-opacity-35 text-xl mb-2 text-center pt-3 pb-2 text-jc-white font-semibold">
            <ReactLink
              onClick={() => setMenu(!menuOn)}
              activeClass="active"
              to="how-works-component"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              href="/"
            >
              Como funciona
            </ReactLink>
          </li>
          <li className=" border-b-[0.5px] w-[80%] border-opacity-35 mb-1 text-xl text-center pt-3 pb-2 text-jc-white font-semibold">
            <ReactLink
              onClick={() => setMenu(!menuOn)}
              activeClass="active"
              to="about-us-component"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              href="/"
            >
              Quem somos
            </ReactLink>
          </li>
          <li className=" border-b-[0.5px] w-[80%] border-opacity-35 mb-1 text-center text-xl pt-3 pb-2 text-jc-white font-semibold">
            <ReactLink
              onClick={() => setMenu(!menuOn)}
              activeClass="active"
              to="faq-component"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              href="/"
            >
              Perguntas frequentes
            </ReactLink>
          </li>
          <li className=" border-b-[0.5px] w-[80%] border-opacity-35 mb-1 text-center text-xl pt-3 pb-2 text-jc-white font-semibold">
            <ReactLink
              onClick={() => setMenu(!menuOn)}
              activeClass="active"
              to="contact-component"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              href="/"
            >
              Fale conosco
            </ReactLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default NavBar
