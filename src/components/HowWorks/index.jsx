import React from 'react'
import Category from './Category'
import Image from 'next/image'

function HowWorks() {
  return (
    <div className="w-screen bg-white p-12 md:p-24">
      <div className="flex justify-start md:justify-around max-w-[1600px] m-auto items-center">
        <div className="lg:w-4/6 items-center">
          <h2 className="text-jc-dark-blue text-4xl pb-5">Como Funciona?</h2>
          <Category />
        </div>

        <div className="max-w-96">
          <Image
            className="hidden lg:block ml-4 object-center object-cover"
            src="/doc.png"
            alt="document image"
            width="350"
            height="1"
          />
        </div>
      </div>
    </div>
  )
}

export default HowWorks
