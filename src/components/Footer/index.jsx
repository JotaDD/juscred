import Image from 'next/image'
import React from 'react'
import Information from './Information'
import SocialNetwork from './SocialNetwork'
import AllRights from './AllRights'

function Footer() {
  return (
    <footer className="w-screen bg-white p-12 md:p-24">
      <div>
        <Image src="/next.svg" alt="golde logo" width="50" height="50" />
        <Information />
        <SocialNetwork />
      </div>
      <AllRights />
    </footer>
  )
}

export default Footer
