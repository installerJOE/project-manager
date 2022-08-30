import React from 'react'
import { Link } from 'react-router-dom'

const Unauthenticated = () => {
  return (
    <div>
      <h1 className='xxl-header'>
        Oops! Error 401
      </h1>
      <p> You have to be authenticated to access this resource! </p>
      <p>
        <Link to="/">
          Go Back Home
        </Link>  
      </p>
    </div>
  )
}

export default Unauthenticated