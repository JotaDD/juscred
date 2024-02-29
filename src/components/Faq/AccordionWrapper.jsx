const AccordionWrapper = ({ children }) => {
  return (
    <div className="wrapper container gap-6 w-[90%] flex justify-center items-center lg:justify-center flex-wrap lg:items-start  ">
      {children}
    </div>
  )
}
export default AccordionWrapper
