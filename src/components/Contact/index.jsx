import React from 'react'
import Title from './Title'
import Form from './Form'

function Contact() {
  return (
    <div
      id="contact-component"
      className="w-full border bg-jc-dark-blue flex justify-center items-center p-12 md:p-24"
    >
      <div className="max-w-[1200px] w-[80%] border border-blue-300 xl:mx-[5%] xl2:mx-[20%] flex flex-col lg:flex-row justify-between items-center">
        <Title />
        <Form />
      </div>
    </div>
  )
}

export default Contact
