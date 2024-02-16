const Title = (props) => {
  return (
    <h2
      className={`text-jc-dark-blue text-center text-3xl md:text-4xl pb-5 ${props.className}`}
    >
      {props.title}
    </h2>
  )
}
export default Title
