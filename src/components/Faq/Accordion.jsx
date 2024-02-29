import ButtonSVG from './ButtonSVG'
const Accordion = ({ title, description, toggle, isOpen }) => {
  return (
    <div className=" container p-4 flex flex-col justify-center items-center rounded-md shadow-md overflow-hidden ">
      <button
        className=" text-jc-dark-blue cursor-pointer font-bold flex justify-between items-center w-full "
        onClick={toggle}
      >
        <span className="text-left text-sm md:text-base mr-1">{title}</span>
        <ButtonSVG isOpen={isOpen} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-jc-light-purple text-sm  w-full
        ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3 ' : 'grid-rows-[0fr] opacity-0 '}
        `}
      >
        <p className="w-[90%] overflow-hidden">{description}</p>
      </div>
    </div>
  )
}

export default Accordion
