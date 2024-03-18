import Image from 'next/image'
import React from 'react'

function Category() {
  return (
    <div className="flex  flex-col gap-16">
      <div className="flex flex-auto justify-center items-center max-w-2xl gap-6">
        <Image
          className="hidden md:block xl:block fill-jc-dark-blue w-24 xl:w-[6.5rem]"
          src="/Idoc.svg"
          alt="doc search"
          width="90"
          height="90"
        />
        <div>
          <h3 className="text-jc-dark-blue font-bold text-xl md:text-2xl">
            Análise do Crédito e Proposta de Pagamento
          </h3>
          <p className="text-jc-dark-blue text-md md:text-lg">
            Após analisarmos sua Ação Judicial, formulamos uma proposta de
            pagamento baseada em diversos fatores, como o valor envolvido e o
            estágio do processo.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-2xl gap-6">
        <Image
          className="hidden md:block xl:block fill-jc-dark-blue w-24 xl:w-24 "
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
            Se você aceitar nossa proposta, elaboramos o contrato de cessão de
            direitos creditórios e agendamos a assinatura conjunta em cartório.
          </p>
        </div>
      </div>
      <div className="flex justify-center  items-center max-w-2xl gap-6">
        <Image
          className="hidden md:block xl:block fill-jc-dark-blue w-24 xl:w-24 "
          src="/pix.svg"
          alt="pix"
          width="104"
          height="90"
        />
        <div>
          <h3 className="text-jc-dark-blue font-bold text-xl md:text-2xl">
            Receba seu PIX imediatamente
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
