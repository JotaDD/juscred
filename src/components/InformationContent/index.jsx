import React from 'react'
import Content from './Content'

function InformationContent({ title, contentArray }) {
  return (
    <div className="w-screen bg-white px-10 py-20 mgs:p-24 mb-0">
      <div className="max-w-[1600px] m-auto flex flex-col mgs:px-12">
        <h1 className="text-jc-dark-blue w-full text-center text-3xl">
          {`${title}`}
        </h1>
        <Content contentArray={contentArray} />
      </div>
    </div>
  )
}

export default InformationContent
