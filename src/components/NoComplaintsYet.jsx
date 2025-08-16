import React from 'react'

const NoComplaintsYet = () => {
  return (
    <div className="w-90 p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <svg 
          className="w-6 h-6 text-blue-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <h3 className="text-lg font-medium text-blue-800">
          No Complaints Submitted Yet
        </h3>
        <p className="text-sm text-blue-600">
          There are no complaints to display at this time.  
        </p>
      </div>
    </div>
  )
}

export default NoComplaintsYet