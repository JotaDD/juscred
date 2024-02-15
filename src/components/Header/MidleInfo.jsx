'use client'

import React from 'react'
import { Link } from 'react-scroll'

function MidleInfo() {
  return (
    <div className=" pt-20 pb-16">
      <h1 className="text-jc-white max-w-[485px] text-2xl mb-2 font-bold">
        Possui crédito judicial e não quer esperar até o fim do processo para
        receber?
      </h1>
      <p className="text-jc-white text-xl mb-6">A JUSCRED te ajuda com isso.</p>
      <Link
        activeClass="active"
        to="contact-component"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        href="/"
      >
        <button className="bg-jc-light-yellow text-jc-dark-blue text-sm rounded-md px-6 pt-3 pb-2 hover:bg-opacity-85">
          Faça já um orçamento!
        </button>
      </Link>
    </div>
  )
}

export default MidleInfo
