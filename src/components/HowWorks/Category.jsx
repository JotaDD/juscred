import Image from 'next/image'
import React from 'react'

function Category() {
  return (
    <div className="flex flex-col gap-16 max-w-[40rem]">
      <div className="flex justify-center items-center max-w-3xl gap-6">
        <Image
          className="hidden md:block xl:block fill-jc-dark-blue w-20 xl:w-[6.5rem]"
          src="/Idoc.svg"
          alt="doc search"
          width="90"
          height="90"
        />
        <div>
          <h3 className="text-jc-dark-blue font-bold text-xl md:text-2xl">
            Análise do crédito e formulação da proposta
          </h3>
          <p className="text-jc-dark-blue text-md md:text-lg">
            A partir da análise da Ação Judicial do interessado e aprovação das
            condições para a cessão do crédito, a JUSCRED PRECATÓRIOS formulará
            uma proposta de pagamento baseada no valor envolvido, estágio da
            ação judicial, tipo de devedor, entre outros.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-3xl gap-6">
        <Image
          className="hidden md:block xl:block fill-jc-dark-blue w-20 xl:w-24 "
          src="/Icontrato.svg"
          alt="doc search"
          width="104"
          height="90"
        />
        <div>
          <h3 className="text-jc-dark-blue font-bold text-xl md:text-2xl">
            Aceitação da Proposta e Contratação
          </h3>
          <p className="text-jc-dark-blue text-md md:text-lg">
            Aceita a proposta pelo interessado, será elaborado o Contrato ou
            Escritura Pública de Cessão de Direitos Creditórios e agendada uma
            data para a assinatura conjunta em cartório.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-3xl gap-6">
        <Image
          className="hidden md:block xl:block fill-jc-dark-blue w-20 xl:w-24 "
          src="/Iforma-de-pagamento.svg"
          alt="doc search"
          width="104"
          height="90"
        />
        <div>
          <h3 className="text-jc-dark-blue font-bold text-xl md:text-2xl">
            Pagamento Imediato e substituição processual
          </h3>
          <p className="text-jc-dark-blue text-md md:text-lg">
            Assinado o contrato ou a Escritura Pública em cartório, o pagamento
            do valor combinado é realizado no ato, por meio do PIX e toda a
            transação é informada ao Juiz de Direito na ação judicial.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Category
