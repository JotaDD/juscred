import React from 'react'
import Information from './Information'
import SocialNetwork from './SocialNetwork'
import AllRights from './AllRights'
import GoldenLogo from './icons/GoldenLogo'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-screen bg-white p-12 md:px-24 mt-10">
      <h3 className="text-jc-dark-blue text-xl font-bold w-full text-center mb-8 hidden md:block">
        Juscred Precatórios e Ativos Ltda.
      </h3>
      <div className="max-w-[1600px] m-auto grid grid-cols-1 gap-14 md:grid-cols-2 xl:gap-0 xl:grid-cols-3 items-end xl">
        <div className="col-span-1">
          <Link href="/">
            <GoldenLogo />
          </Link>
        </div>
        <Information />
        <div className="md:col-span-2 xl:col-span-1">
          <SocialNetwork />
        </div>
      </div>
      <AllRights />
    </footer>
  )
}

export default Footer
