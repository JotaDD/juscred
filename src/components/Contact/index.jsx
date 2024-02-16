import React from 'react'
import Title from './Title'
import Form from './Form'

function Contact() {
  return (
    <div
      id="contact-component"
      className="w-screen border border-red-500 bg-jc-dark-blue flex justify-center items-center p-12 md:p-24"
    >
      <div className="max-w-[1300px] xl:mx-[5%] xl2:mx-[10%] flex w-full flex-col lg:flex-row justify-between items-center">
        <Title />
        <Form />
      </div>
    </div>
  )
}

export default Contact
