import React from 'react'

export default function Cardcontent({title,description, icon}) {
  return (
    <div>
      <div className='bg-gradient pl-1'>
          <div className="bg-white p-5 flex items-start pb-10">
            <span className="text-pink-600"
            >
            {icon}
            </span>
    
            <div className="ml-4">
              <h2 className="text-lg font-bold text-purple-900">{title}</h2>
    
              <p className="mt-1 text-sm text-gray-500">
                {description}
              </p>
            </div>
          </div>
          </div>
    </div>
  )
}
