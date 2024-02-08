import React from 'react'
import Title from './Title'
import Form from './Form'

function Contact() {
  return (
    <div className="bg-jc-dark-blue w-screen grid grid-cols-1 md:grid-cols-2 p-12 md:p-24 gap-x-28 lg:gap-x-32 xl:gap-x-0 gap-y-6 items-center">
      <Title />
      <Form />
    </div>
  )
}

export default Contact
