import React from 'react'
import TextImg from './TextImg'

function Content({ contentArray }) {
  const content = contentArray.reduce((prev, cur, index) => {
    return [
      ...prev,
      {
        id: index,
        startLeft: index % 2 === 0,
        text: cur.text,
        image: cur.image,
      },
    ]
  }, [])

  return (
    <div
      className={`mgs:grid mgs:grid-rows-${content.lenght} pt-16 pb-0 flex flex-col gap-12 mgs:gap-0`}
    >
      {content.map((info) => (
        <TextImg info={info} key={info.id} />
      ))}
    </div>
  )
}

export default Content
