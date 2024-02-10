import React from 'react'
import NavBar from './NavBar'
import MidleInfo from './MidleInfo'
import FooterInfo from './FooterInfo'

function Header() {
  return (
    <div>
      <div className="w-screen p-12 md:px-24 bg-[url(/HeaderImg.svg)] h-max bg-cover bg-center">
        <div className="max-w-[1600px] mx-auto">
          <NavBar />
          <MidleInfo />
        </div>
      </div>
      <FooterInfo />
    </div>
  )
}

export default Header
