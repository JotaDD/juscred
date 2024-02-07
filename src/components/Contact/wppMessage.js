export default function wppMessage(name) {
  console.log(name)
  const fullName = name.split(' ')
  if (!fullName) return name
  return fullName.reduce((prev, cur) => {
    return prev + cur + '%20'
  }, '')
}
