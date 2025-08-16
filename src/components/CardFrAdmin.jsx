import React from 'react'

const CardFrAdmin = ({id, title, desc, date, status, approveComplaint, rejectComplaint}) => {
  return (
    <>
        <div className='flex flex-col justify-between min-h-4 w-90 sm:w-100 lg:w-170 p-6 mb-4.5 pt-6 bg-white shadow-sm rounded-2xl'>
            <div className='flex justify-between'>
                {/* Left Section */}
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-xl'>{title}</h1>

                    <div className='flex items-center text-[12px] text-gray-600 gap-4'>
                        {/* Person */}
                        <div className='flex items-center gap-1'>
                            <img src="/person.svg" alt="" className='w-3.5 h-3.5 fill-gray-700' />
                            <span>Anonymous Student</span>
                        </div>

                        {/* Calendar */}
                        <div className='flex items-center gap-1'>
                            <img src="/calender.svg" alt="" className='w-3.5 h-3.5 fill-gray-700' />
                            <span>{date}</span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <span className='py-1 px-2 text-[12px] font-semibold text-black bg-gray-100 shadow-sm rounded-xl'>
                    {status}
                    </span>
                </div>
              </div>
              
                <div className='mt-3 flex flex-col'>
                  <p className='text-sm text-gray-800'>{desc}</p>
                  {approveComplaint && rejectComplaint &&
                  <div className='flex gap-3 mt-5'>
                      <button
                          onClick={() => approveComplaint(id)}
                          className='flex items-center justify-center cursor-pointer gap-1 pl-2 pr-4 py-1 bg-blue-500 text-white text-3.5 rounded-xl font-semibold'>
                       <img src="/public/accept.svg" alt="" className='w-3.5 h-3.5' />
                       Accept
                      </button>
                          
                      <button
                          onClick={() => rejectComplaint(id)}
                          className='flex items-center justify-center cursor-pointer gap-1 pl-2 pr-4 py-1 bg-red-500 text-white text-3.5 rounded-xl font-semibold'>
                          <img src="/public/reject.svg" alt="" className='w-5.5 h-5.5' />
                         Reject
                      </button>          
                  </div>
                  }

                </div>
        </div>
    </>
  )
}

export default CardFrAdmin