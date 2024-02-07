'use client'
import React, { useState } from 'react'
import { IMaskInput } from 'react-imask'
import formError from './formErrors'
import wppMessage from './wppMessage'

function Form() {
  const [validation, setValidation] = useState({
    isVlaid: false,
    message: '',
  })
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
      window.location.href = `https://wa.me/+5521997221085/?text=Olá%20meu%20nome%20é%20${wppMessage(formValues.nome)}%0Agostaria%20de%20fazer%20um%20orçamento`
      setValidation({ isVlaid: false, message: '' })
    }
    setValidation({ isVlaid: true, message: error })
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-jc-light-yellow text-xl">
        Entre em contato conosco!
      </h3>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-y-2">
        <input
          className="p-1 outline-none placeholder-jc-dark-blue focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100"
          placeholder="Nome"
          value={formValues.nome}
          name="nome"
          onChange={(e) => handleChange(e)}
        />
        <IMaskInput
          className="p-1 outline-none placeholder-jc-dark-blue focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100"
          placeholder="Telefone"
          value={formValues.telefone}
          name="telefone"
          onChange={(e) => handleChange(e)}
          mask="(21) 00000-0000"
        />
        <IMaskInput
          className="p-1 outline-none placeholder-jc-dark-blue focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100"
          placeholder="CPF (opcional)"
          value={formValues.cpf}
          name="cpf"
          onChange={(e) => handleChange(e)}
          mask="000.000.000-00"
        />
        <input
          className="p-1 outline-none placeholder-jc-dark-blue focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100"
          placeholder="Devedor (opcional)"
          value={formValues.devedor}
          name="devedor"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="w-full p-1 outline-none placeholder-jc-dark-blue focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100 lg:col-span-2"
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
        className="bg-jc-light-yellow w-32 p-2 rounded-md"
        onClick={() => handleSubmit()}
      >
        Tudo certo
      </button>
    </div>
  )
}

export default Form
