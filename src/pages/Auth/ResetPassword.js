import { useState, useEffect } from "react"
import Layout from "../../components/Auth/Layout"
import { Link } from "react-router-dom"

const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  
  const handlePasswordReset = (e) => {
    e.preventDefault();
    console.log("You are logged in");
  }


  return (
    <Layout>
      <form onSubmit={handlePasswordReset}>
        <h3 className="caption-header text-center text-yellow"> Reset Password </h3> 
        <hr class="short-hr"/>
        
        <div className='form-group'>
          <label>
            Email Address
          </label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="e.g. joemike@gmail.com"
            value={email}
            disabled
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label>
            Password
          </label>
          <input 
            type="password" 
            className="form-control" 
            value={password}
            placeholder="*********"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {/* Token from the verification link */}
        <input type="hidden" name="token"/>

        <div className='form-group'>
          <label>
            Re-type Password
          </label>
          <input 
            type="password" 
            className="form-control" 
            value={confirmPwd}
            placeholder="*********"
            onChange={e => setConfirmPwd(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <button type="submit" className='btn btn-white-bd-transparent width-100'>
            Reset Password
          </button>
        </div>

        <div className='form-group mt-1'>
          <Link className="link-text link-text-white" to="/auth/login"> 
            Back to Login
          </Link>
        </div>
      </form>
      </Layout>
  )
}

export default ResetPassword