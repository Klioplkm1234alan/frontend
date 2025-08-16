import React from 'react'

const Heading = ({ prompt }) => {
  return (
      <h1 className='text-2xl pl-3 sm:pl-0 font-bold mb-4 text-left w-90'>{ prompt }</h1>
  )
}

export default Heading