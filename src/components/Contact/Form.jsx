'use client'
import React, { useState } from 'react'
import { IMaskInput } from 'react-imask'
import formError from './formErrors'
import wppMessage from './wppMessage'
import { usePathname } from 'next/navigation'

function Form() {
  const [validation, setValidation] = useState({
    isVlaid: false,
    message: '',
  })

  const pathName = usePathname()
  const isHome = pathName === '/'

  const [formValues, setForm] = useState({
    nome: '',
    telefone: '',
    cpf: '',
    devedor: '',
    processo: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...formValues,
      [name]: value,
    })
  }

  function handleSubmit() {
    const error = formError(formValues)
    if (!error) {
      window.location.href = `https://wa.me/+5521997221085/?text=Olá,%20sou%20${wppMessage(formValues.nome)},%0ACPF:%20${formValues.cpf}%0Ae%20gostaria%20de%20solicitar%20o%20um%20orçamento!%0ADevedor:%20${formValues.devedor},%0ANúmero%20do%20processo:%20${formValues.processo}`
      setValidation({ isVlaid: false, message: '' })
    }
    setValidation({ isVlaid: true, message: error })
  }

  return (
    <div className="flex flex-col gap-4 lg:ml-12 lg:max-w-[32rem]">
      <div>
        <h3 className="text-jc-light-yellow text-lg lg:text-2xl font-bold">
          Entre em contato conosco!
        </h3>
      </div>
      <form className="grid w-full grid-cols-1 mg:grid-cols-2 gap-y-5">
        <input
          className="p-3 pt-4 outline-none placeholder-jc-dark-blue placeholder:opacity-75 focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100 text-xl"
          placeholder="Nome"
          value={formValues.nome}
          name="nome"
          onChange={(e) => handleChange(e)}
        />
        <IMaskInput
          className="p-3 pt-4 outline-none placeholder-jc-dark-blue placeholder:opacity-75 focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100 text-xl"
          placeholder="Telefone"
          value={formValues.telefone}
          name="telefone"
          onChange={(e) => handleChange(e)}
          mask="(00) 00000-0000"
        />
        <IMaskInput
          className="p-3 pt-4 outline-none placeholder-jc-dark-blue placeholder:opacity-75 focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100 text-xl"
          placeholder="CPF (opcional)"
          value={formValues.cpf}
          name="cpf"
          onChange={(e) => handleChange(e)}
          mask="000.000.000-00"
        />
        <input
          className="p-3 pt-4 outline-none placeholder-jc-dark-blue placeholder:opacity-75 focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100 text-xl"
          placeholder="Devedor (opcional)"
          value={formValues.devedor}
          name="devedor"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="w-full p-3 pt-4 outline-none placeholder-jc-dark-blue placeholder:opacity-75 focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100 mg:col-span-2 text-xl"
          placeholder="Número do processo (opcional)"
          value={formValues.processo}
          name="processo"
          onChange={(e) => handleChange(e)}
        />
      </form>
      {!validation.isVlaid ? (
        ''
      ) : (
        <p className="text-red-500">{validation.message}</p>
      )}
      <button
        className={`${isHome ? ' w-[10rem] ' : 'text-white w-56'} bg-jc-light-yellow p-1 pt-2  rounded-md text-lg text-center`}
        onClick={() => handleSubmit()}
      >
        {isHome ? 'Tudo certo' : 'Entrar em contato'}
      </button>
    </div>
  )
}

export default Form
