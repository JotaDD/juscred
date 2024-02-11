'use client'
import { useState } from 'react'
import ButtonSVG from './ButtonSVG'
const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false)
  //  border-b-2  border-gray-200
  // details-animated opacity-0 transform -translate-y-5 transition duration-500 ease-in-out
  return (
    <div className=" container p-4 shadow-md">
      <button
        className=" text-jc-dark-blue cursor-pointer font-bold flex justify-between items-center w-full "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left">{title}</span>
        <ButtonSVG isOpen={isOpen} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-jc-light-purple text-sm
        ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <p className="w-[90%] overflow-hidden">{description}</p>
      </div>
    </div>
  )
}

/**
 *  <details
        className=" text-jc-light-purple text-sm flex justify-between cursor-pointer p-4 shadow-md"
        onToggle={() => setIsOpen(!isOpen)}
      >
        <summary className="  text-jc-dark-blue cursor-pointer font-bold flex justify-between items-center ">
          <span>{title}</span>
          <ButtonSVG isOpen={isOpen} />
        </summary>
        <p className="w-[90%]">{description}</p>
      </details>
 */
export default Accordion
