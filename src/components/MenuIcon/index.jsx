const MenuIcon = ({ isOpen }) => {
  return (
    <div className=" cursor-pointer inline-block">
      <div
        className={`${isOpen && 'transform translate-y-[9px] rotate-[-45deg]'} w-[30px] h-[3px] bg-jc-light-yellow mt-[6px] transition-all duration-300 `}
      ></div>
      <div
        className={`${isOpen && 'opacity-0'} w-[30px] h-[3px] bg-jc-light-yellow mt-[6px] transition-all duration-300 `}
      ></div>
      <div
        className={`${isOpen && 'transform translate-y-[-9px] rotate-[45deg]'} w-[30px] h-[3px] bg-jc-light-yellow mt-[6px] transition-all duration-300`}
      ></div>
    </div>
  )
}
export default MenuIcon
