import React from 'react'
import { Link } from 'react-router-dom'

const Forbidden = () => {
  return (
    <div>
      <h1 className='xxl-header'>
        Ooops! Error 403
      </h1>
      <p> Forbidden! </p>
      <p>
        <Link to="/">
          Go Back Home
        </Link>  
      </p>
    </div>
  )
}

export default Forbidden