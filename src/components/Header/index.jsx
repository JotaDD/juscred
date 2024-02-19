import React from 'react'
import NavBar from './NavBar'
import MidleInfo from './MidleInfo'
import FooterInfo from './FooterInfo'

function Header() {
  return (
    <div>
      <div
        id="home-component"
        className="w-full p-12 md:px-24 bg-[url(/HeaderImg.svg)] h-max bg-cover bg-center flex flex-col items-start  justify-center"
      >
        <div className=" xl2:mx-[30%] lg:mx-16 flex max-w-[1200px]">
          <NavBar />
          <MidleInfo />
        </div>
      </div>
      <FooterInfo />
    </div>
  )
}

export default Header
