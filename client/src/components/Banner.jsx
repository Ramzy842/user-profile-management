import React from 'react'

const Banner = ({title, bgColor, textColor}) => {
  return (
    <div className={`fixed top-0 left-12 py-2 px-4 pr-16 text-xl xl:inline-block  hidden ${bgColor} text-${textColor} backdrop-blur-2xl`}>{title}</div>
  )
}

export default Banner