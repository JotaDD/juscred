'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Link as ReactLink } from 'react-scroll'

function NavBar() {
  return (
    <div className="flex justify-between items-center w-full max-w-[1600px] pb-8 pt-0">
      <Link href="/">
        <Image
          className="w-44 md:w-52"
          src="/FullLogo.svg"
          alt="document image"
          width="350"
          height="1"
        />
      </Link>

      <ul className="hidden lg:flex gap-12">
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
    </div>
  )
}

export default NavBar
