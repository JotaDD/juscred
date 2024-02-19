import React from 'react'
import Information from './Information'
import SocialNetwork from './SocialNetwork'
import AllRights from './AllRights'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="w-[90%] flex flex-col items-center bg-white p-12 md:px-24 mt-10">
      <div className="max-w-[1200px] w-fit lg:flex lg:justify-center lg:items-center gap-14 lg:gap-0">
        <div className="flex flex-col justify-center items-center lg:items-start lg:flex-auto lg:flex-row lg:border-r-2">
          <Link href="/">
            <Image src="/icon.png" alt="Juscred" width={90} height={90} />
          </Link>
          <Information />
        </div>
        <SocialNetwork />
      </div>
      <AllRights />
    </footer>
  )
}

export default Footer
