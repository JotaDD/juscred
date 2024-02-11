'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

function Title() {
  const pathName = usePathname()
  const isHome = pathName === '/'

  return (
    <div className="w-full ">
      <div className={`${isHome ? '' : 'hidden'} pb-12 lg:max-w-[24rem]`}>
        <h2 className="text-jc-light-yellow text-3xl lg:text-4xl font-bold">
          Solicite um orçamento sem qualquer custo ou compromisso.
        </h2>
        <p className="text-white xl:text-xl">
          Preencha com seus dados o formulário ao lado e seja redirecionado
          agora para o nosso WhatsApp.
        </p>
      </div>

      <div className={`${isHome ? 'hidden' : ''} lg:max-w-[24rem]`}>
        <h2 className="text-jc-light-yellow min-w-full text-center lg:text-start text-2xl xl:min-w-[28rem] pb-12">
          Agora que você já conhece quem somos, solicite um orçamento sem
          qualquer custo ou compromisso.
        </h2>
      </div>
    </div>
  )
}

export default Title
