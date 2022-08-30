import { useState } from "react"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [name, setName] = useState('')

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log("You are logged in");
  }

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <h3 className="caption-header text-center"> Create Account </h3>
        
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
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register