import React from 'react'
import NavBar from './NavBar'
import MidleInfo from './MidleInfo'
import FooterInfo from './FooterInfo'

function Header() {
  return (
    <div>
      <div
        id="home-component"
        className="w-screen p-12 md:px-24 bg-[url(/HeaderImg.svg)] h-max bg-cover bg-center flex flex-col items-start  justify-center"
      >
        <div className="mt-10 xl2:mx-[10%] max-w-[1600px]">
          <NavBar />
          <MidleInfo />
        </div>
      </div>
      <FooterInfo />
    </div>
  )
}

export default Header
