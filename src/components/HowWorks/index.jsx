import React from 'react'
import Category from './Category'
import Image from 'next/image'

function HowWorks() {
  return (
    <div className="w-screen bg-white p-12 md:p-24">
      <div className="flex justify-start md:justify-around max-w-[1600px] m-auto items-center">
        <div>
          <h2 className="text-jc-dark-blue text-4xl pb-5">Como Funciona?</h2>
          <Category />
        </div>

        <div className="max-w-96 lg:w-[25%] lg:h-[35rem]">
          <Image
            className="hidden lg:block ml-4 object-cover w-[350px] h-[550px]"
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
