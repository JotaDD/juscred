const AccordionWrapper = ({ children }) => {
  return (
    <div className="wrapper container gap-6 w-[90%] flex justify-center items-center lg:justify-center flex-wrap lg:items-start  ">
      {children}
    </div>
  )
}
// grid-template-columns: 1fr minmax(0, 1fr); lg:grid lg:items-start
// lg:auto-rows-auto lg:row-span-2   lg:justify-items-center lg:grid-cols-2
export default AccordionWrapper
