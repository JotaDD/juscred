import React from 'react'

function Information() {
  return (
    <div className="lg:w-[26rem] flex flex-col justify-center md:col-span-1">
      <h3 className="text-jc-dark-blue text-xl font-bold w-full text-center mb-8 md:hidden">
        Juscred Precatórios e Ativos Ltda.
      </h3>
      <div className="mx-auto">
        <p className="text-jc-dark-blue font-bold opacity-75">
          Rua Humberto de Campos, 365 - Vila Xavier - Assis/SP
        </p>
        <p className="text-jc-dark-blue font-bold opacity-75">CEP: 19802-090</p>
        <p className="text-jc-dark-blue font-bold opacity-75">
          CNPJ: 53.594.915/0001-39
        </p>
        <p className="text-jc-dark-blue font-bold opacity-75">
          Telefone WhatsApp: (18) 99690-1111
        </p>
      </div>
    </div>
  )
}

export default Information
