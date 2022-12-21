import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=''>
      <Link to="/" >
      <h3 className='text-3xl text-center pt-3 font-bold '>QUIZ FOR FUN AND KNOWLEDGE :)</h3>
      
      <hr />
      </Link>
      
    </div>
  )
}

export default Header
