'use client'
import { useState } from 'react'
import ButtonSVG from './ButtonSVG'
const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <details
        className=" text-[#6F6C90] text-sm open:transition open:duration-700 close:transition close:duration-700 flex justify-between cursor-pointer border-b-2 border-gray-200 p-4"
        onToggle={() => setIsOpen(!isOpen)}
      >
        <summary className=" text-jc-dark-blue font-bold flex justify-between items-baseline ">
          <span>{title}</span>
          <ButtonSVG isOpen={isOpen} />
        </summary>
        <p className="w-[90%]">{description}</p>
      </details>
    </>
  )
}
export default Accordion
