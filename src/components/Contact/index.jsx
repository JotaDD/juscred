import React from 'react'
import Title from './Title'
import Form from './Form'

function Contact() {
  return (
    <div className="w-screen bg-jc-dark-blue p-12 md:p-24">
      <div className="max-w-[1600px] m-auto grid grid-cols-1 md:grid-cols-2 gap-x-28 lg:gap-x-32 xl:gap-x-0 gap-y-6 items-center">
        <Title />
        <Form />
      </div>
    </div>
  )
}

export default Contact
