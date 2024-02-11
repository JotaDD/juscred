import React from 'react'
import NavBar from '../Header/NavBar'
import MidleInfo from './MidleInfo'

function CustomHeader({ titleName, nextImagePath }) {
  return (
    <div>
      <div
        className={`w-screen p-12 md:px-24 bg-[url(/${`${nextImagePath}`})] bg-zinc-600 h-max bg-cover bg-center`}
      >
        <div className="max-w-[1600px] mx-auto">
          <NavBar />
          <MidleInfo titleName={`${titleName}`} />
        </div>
      </div>
    </div>
  )
}

export default CustomHeader
