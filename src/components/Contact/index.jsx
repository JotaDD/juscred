import React from 'react'
import Title from './Title'
import Form from './Form'

function Contact() {
  return (
    <div className="w-screen bg-jc-dark-blue p-12 md:p-24">
      <div className="max-w-[1600px] m-auto flex flex-col lg:flex-row justify-between items-center xl:px-auto">
        <Title />
        <Form />
      </div>
    </div>
  )
}

export default Contact
