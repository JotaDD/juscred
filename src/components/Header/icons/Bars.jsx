import React from 'react'

function Bars() {
  return (
    <svg
      className="w-12 h-12 text-jc-light-yellow bottom-1 lg:hidden"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M5 7h14M5 12h14M5 17h14"
      />
    </svg>
  )
}

export default Bars
