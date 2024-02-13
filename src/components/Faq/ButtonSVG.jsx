const ButtonSVG = ({ isOpen }) => {
  return (
    <div className={`p-2 w-fit bg-jc-${isOpen ? 'dark-blue' : 'white'}`}>
      <svg
        className={`${isOpen ? 'fill-jc-white' : 'fill-jc-dark-blue'} shrink-0`}
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          className={`transform origin-center transition duration-200 ease-out ${
            isOpen && '!rotate-180'
          }`}
        />
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
            isOpen && '!rotate-180'
          }`}
        />
      </svg>
    </div>
  )
}
export default ButtonSVG
