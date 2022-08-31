import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Layout from "../../components/Auth/Layout"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("You are logged in");
    navigate('/dashboard')
  }
  
  return (
    <Layout>
      <form onSubmit={handleLogin}>
        <h3 className="caption-header text-center text-yellow"> Login </h3>
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
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>
            Password
          </label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="*********"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className='form-group mt-1'>
          Forgot your password?&nbsp;
          <Link className="link-text link-text-white" to="/auth/forgot-password"> 
            Send reset link
          </Link>
        </div>

        <div className='form-group mt-1'>
          <button type="submit" className='btn btn-white-bd-transparent width-100'>
            Login
          </button>
        </div>

        <div className='form-group mt-1'>
          Don't have an account yet?&nbsp;
          <Link className="link-text link-text-white" to="/auth/create-account"> 
            Create one here 
          </Link>
        </div>

      </form>
    </Layout>
  )
}

export default Login