import React from 'react'

const AdminHeading = ({svg, text1, text2}) => {
  return (
        <div className='min-h-10 w-90 sm:w-100 lg:w-170 rounded-2xl mb-6 flex gap-4'>
        <div>
          <div className='p-2 bg-blue-50 rounded-full items-start'>
            <img src={svg} className='' alt="" />
          </div>
        </div>
        <div className='flex flex-col'>
              <h1 className='font-bold text-2xl'>{text1}</h1>
            <p className='text-[14px] text-gray-600'>{text2}</p>
        </div>
    </div>
  )
}

export default AdminHeading