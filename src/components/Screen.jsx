import React from 'react'

const Screen = ({ children }) => {
  return (
      <div className='min-h-screen bg-[hsl(210_40%_98%)] flex flex-col items-center p-1 py-2 sm:py-6 lg:py-6 sm:p-6 lg:p-6 mb-20 hide'>
          { children }
      </div>
  )
}

export default Screen