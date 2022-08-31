import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Layout from "../../components/Auth/Layout"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [name, setName] = useState('')
  let navigate = useNavigate()

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log("Your account was successfully created");
    navigate('/auth/email-verification')
  }

  return (
    <Layout>
      <form onSubmit={handleRegistration}>
        <h3 className="caption-header text-center text-yellow"> Create Account </h3>
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
            Full Name
          </label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="e.g. Joe Mike"
            value={name}
            onChange={e => setName(e.target.value)}
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
            Create
          </button>
        </div>

        <div className='form-group mt-1'>
          Already have an account?&nbsp;
          <Link className="link-text link-text-white" to="/auth/login"> 
            Sign in here 
          </Link>
        </div>
      </form>
    </Layout>
  )
}

export default Register