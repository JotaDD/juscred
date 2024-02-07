export default function formError(form) {
  const { nome, telefone, cpf } = form

  if (nome.length <= 3) {
    return 'O campo de nome deve conter ao menos 3 caracteres'
  }

  if (telefone.length !== 15) {
    return 'O campo de número deve conter 11 números com o ddd no início'
  }

  if (cpf.length === 0) {
    return false
  }

  if (cpf.length !== 14) {
    return 'O campo de cpf deve conter 11 números'
  }

  return false
}
