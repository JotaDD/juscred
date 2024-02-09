import React from 'react'
import Instagran from './icons/Instagran'
import Linkedin from './icons/Linkedin'
import WhatsApp from './icons/WhatsApp'
import Facebook from './icons/Facebook'
import Link from 'next/link'

function SocialNetwork() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h4 className="text-jc-dark-blue font-bold opacity-85 text-xl">
        Nossas Redes Sociais
      </h4>
      <div className="flex gap-2">
        <Link href="/*" className="hover:opacity-85 focus:opacity-70">
          <Instagran />
        </Link>
        <Link href="/*" className="hover:opacity-85 focus:opacity-70">
          <Linkedin />
        </Link>
        <Link href="/*" className="hover:opacity-85 focus:opacity-70">
          <WhatsApp />
        </Link>
        <Link href="/*" className="hover:opacity-85 focus:opacity-70">
          <Facebook />
        </Link>
      </div>
    </div>
  )
}

export default SocialNetwork
