import React from 'react'

const AdminButton = ({prompt, sorc, onClick, isActive}) => {
  return (
    <div
      className='transition-all duration-100 rounded-xl flex-1 cursor-pointer text-black py-1.5 px-3 flex items-center justify-center text-[14px] gap-2 font-semibold'
      onClick={onClick}
      style={{backgroundColor: isActive ? '#F8FAFC' : ''}}
    >
      <img src={sorc} className='h-4 w-4' alt="" />
      {prompt}
    </div>
  )
}

export default AdminButton