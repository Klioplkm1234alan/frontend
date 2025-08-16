import React from 'react'

const NoNeedForThisCardJFS = ({first, second}) => {
  return (
    <div className='min-h-4 w-90 sm:w-100 lg:w-170 p-6 bg-white rounded-2xl shadow-sm mb-4.5'>
          <h1 className='text-[24px] font-semibold'>{ first }</h1>
          <p className='text-[14px] text-gray-600'>{ second }</p>
    </div>
  )
}

export default NoNeedForThisCardJFS