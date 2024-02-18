import React from 'react'

function Information() {
  return (
    <div className="lg:w-[26rem] lg:mx-10 lg:mr-16  flex flex-col justify-center items-center md:col-span-1">
      <div className="mx-auto">
        <h3 className="text-jc-dark-blue text-xl font-bold w-full text-center my-8 lg:my-0 lg:flex">
          Juscred Precatórios e Ativos Ltda.
        </h3>
        <div>
          <p className="text-jc-dark-blue font-bold opacity-75">
            Rua Humberto de Campos, 365 - Vila Xavier - Assis/SP
          </p>
          <p className="text-jc-dark-blue font-bold opacity-75">
            CEP: 19802-090
          </p>
          <p className="text-jc-dark-blue font-bold opacity-75">
            CNPJ: 53.594.915/0001-39
          </p>
        </div>
      </div>
    </div>
  )
}

export default Information
