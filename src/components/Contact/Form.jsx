'use client'
import React, { useState } from 'react'

function Form() {
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

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-jc-light-yellow text-xl">
        Entre em contato conosco!
      </h3>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 grid-rows-2">
        <input
          className="p-1 outline-none placeholder-jc-dark-blue focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100"
          placeholder="Nome"
          value={formValues.nome}
          name="nome"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="p-1 outline-none placeholder-jc-dark-blue focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100"
          placeholder="Telefone"
          value={formValues.telefone}
          name="telefone"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="p-1 outline-none placeholder-jc-dark-blue focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100"
          placeholder="CPF (opcional)"
          value={formValues.cpf}
          name="cpf"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="p-1 outline-none placeholder-jc-dark-blue focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100"
          placeholder="Devedor (opcional)"
          value={formValues.devedor}
          name="devedor"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="w-full p-1 outline-none placeholder-jc-dark-blue focus:placeholder-zinc-100 border-t-jc-dark-blue border-x-[0.5px] focus:bg-zinc-100 col-end-2"
          placeholder="Número do processo (opcional)"
          value={formValues.processo}
          name="processo"
          onChange={(e) => handleChange(e)}
        />
      </form>
      <button
        className="bg-jc-light-yellow w-32 p-2 rounded-md"
        onClick={() => console.log(formValues)}
      >
        Tudo certo
      </button>
    </div>
  )
}

export default Form
