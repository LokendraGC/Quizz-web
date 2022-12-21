import React from 'react'

function ErrorMessage({children}) {
  return (
    <div className='w-full p-4 border-l-black first-letter:
    bg-blue-500 text-white text-center capitalize mb-6
    '>

        {children}
    </div>
  )
}

export default ErrorMessage