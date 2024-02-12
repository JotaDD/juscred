'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Link as ReactLink } from 'react-scroll'
import Bars from './icons/Bars'
import { useState } from 'react'
import Close from './icons/Close'

function NavBar() {
  const [menuOn, setMenu] = useState(false)

  return (
    <div className="flex justify-between items-center w-full max-w-[1600px] pb-8 pt-0 relative">
      <Link href="/">
        <Image
          className="w-44 md:w-52"
          src="/FullLogo.svg"
          alt="document image"
          width="350"
          height="1"
        />
      </Link>

      <ul className={`${menuOn ? 'hidden' : ''} hidden lg:flex gap-6`}>
        <li className="text-jc-light-yellow px-4 pt-4 pb-2 rounded-lg hover:bg-white hover:bg-opacity-10">
          <Link href="/quem-somos">Quem somos</Link>
        </li>
        <li className="text-jc-light-yellow p-4 rounded-lg hover:bg-white hover:bg-opacity-10">
          <Link href="/como-funciona">Como funciona</Link>
        </li>
        <li className="text-jc-light-yellow p-4 rounded-lg hover:bg-white hover:bg-opacity-10">
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
        <li className="text-jc-light-yellow p-4 rounded-lg hover:bg-white hover:bg-opacity-10">
          <Link href="/">Home</Link>
        </li>
      </ul>

      <button onClick={() => setMenu(!menuOn)} className="lg:hidden">
        {menuOn ? <Close /> : <Bars />}
      </button>

      <ul
        className={`${menuOn ? '' : 'hidden'} lg:hidden flex flex-col absolute top-16 w-full p-5 rounded-xl pt-10 pb-10 backdrop-blur-md`}
      >
        <li className="bg-jc-light-yellow mb-5 text-center pt-3 pb-2 rounded-full text-jc-dark-blue font-semibold">
          <Link onClick={() => setMenu(!menuOn)} href="/quem-somos">
            Quem somos
          </Link>
        </li>
        <li className="bg-jc-light-yellow mb-5 text-center pt-3 pb-2 rounded-full text-jc-dark-blue font-semibold">
          <Link onClick={() => setMenu(!menuOn)} href="/como-funciona">
            Como funciona
          </Link>
        </li>
        <li className="bg-jc-light-yellow mb-5 text-center pt-3 pb-2 rounded-full text-jc-dark-blue font-semibold">
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
        <li className="bg-jc-light-yellow mb-5 text-center pt-3 pb-2 rounded-full text-jc-dark-blue font-semibold">
          <Link onClick={() => setMenu(!menuOn)} href="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
