import React from 'react'
import NavBar from './NavBar'
import MidleInfo from './MidleInfo'
import FooterInfo from './FooterInfo'

function Header() {
  return (
    <>
      <NavBar />
      <div
        id="home-component"
        className="w-full p-12 md:px-24 bg-[url(/HeaderImg.svg)] h-max bg-cover bg-center flex flex-col items-center  justify-center"
      >
        <div className=" max-w-[1200px] md:w-[80%]">
          <MidleInfo />
        </div>
      </div>
      <FooterInfo />
    </>
  )
}

export default Header
