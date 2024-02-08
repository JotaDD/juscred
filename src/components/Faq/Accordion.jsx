'use client'
import { useState } from 'react'
import ButtonSVG from './ButtonSVG'
const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <details
        className="flex justify-between cursor-pointer"
        onToggle={() => setIsOpen(!isOpen)}
      >
        <summary className="font-bold flex justify-between items-baseline ">
          <span>{title}</span>
          <ButtonSVG isOpen={isOpen} />
        </summary>
        <p className="overflow-hidden transition-all duration-300 ease-in-out">
          {description}
        </p>
      </details>
    </>
  )
}
export default Accordion
