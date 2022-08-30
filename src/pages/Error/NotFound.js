import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1 className='xxl-header'> Ooops! Error 404 </h1>
      <p> Page Not Found! </p>
      <p>
        <Link to="/">
          Go Back Home
        </Link>  
      </p>
    </div>
  )
}

export default NotFound