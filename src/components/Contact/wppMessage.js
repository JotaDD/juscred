export default function wppMessage(name) {
  const fullName = name.split(' ')
  if (!fullName) return name
  return fullName.reduce((prev, cur) => {
    return prev + cur + '%20'
  }, '')
}
