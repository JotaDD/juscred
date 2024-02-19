import React from 'react'
import Category from './Category'
import Image from 'next/image'

function HowWorks() {
  return (
    <div
      id="how-works-component"
      className="max-w-[1400px] bg-white p-12 md:p-24"
    >
      <div className="flex justify-start flex-auto   md:justify-center  m-auto items-center">
        <div className="lg:mr-10">
          <h2 className="text-jc-dark-blue text-3xl md:text-4xl pb-5">
            Como Funciona?
          </h2>
          <Category />
        </div>

        <div className="max-w-96 flex-auto lg:pl-10 lg:h-[35rem]">

          <Image
            className="hidden lg:block ml-4 object-cover w-full h-full"
            src="/doc.png"
            alt="document image"
            width="486"
            height="766"
          />
        </div>
      </div>
    </div>
  )
}

export default HowWorks
