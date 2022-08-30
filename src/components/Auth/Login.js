import { useState } from "react"



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("You are logged in");
  }
  
  
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3 className="caption-header text-center"> Login </h3>
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
        <div className='form-group'>
          <button type="submit" className='btn btn-white-bd-transparent width-100'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login