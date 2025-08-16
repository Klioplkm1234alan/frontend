import React from 'react'

const InfosCom = ({svg, text1, text2}) => {
  return (
    <div className='min-h-10 mt-3 w-90 sm:w-100 bg-white rounded-2xl p-4 shadow-sm flex gap-4'>
        <div>
          <div className='p-2 bg-blue-50 rounded-full items-start min-w-10'>
            <img src={svg} className='w-6 h-6 object-contain' alt="" />
          </div>
        </div>
        <div className='flex flex-col'>
              <h1 className='font-semibold'>{text1}</h1>
            <p className='text-[12px] text-gray-600'>{text2}</p>
        </div>
    </div>
  )
}

export default InfosCom