'use client'

import React from 'react'

function TextImg({ info }) {
  const { startLeft, text, image } = info

  return (
    <div
      className={`flex ${startLeft ? 'flex-row-reverse' : ''} items-center h-[16rem] mgs:h-[24rem] mgs:border-none rounded-xl shadow-lg bg-zinc-100 mgs:shadow-none mgs:bg-white`}
    >
      <p className="mgs:w-1/2 w-[99%] py-8 px-12 text-jc-dark-blue">{`${text}`}</p>
      <div
        className={`hidden mgs:block bg-[url(/${`${image}`})] bg-zinc-600 h-full mgs:w-full max-w-[50%] bg-cover bg-center`}
      ></div>
    </div>
  )
}

export default TextImg
