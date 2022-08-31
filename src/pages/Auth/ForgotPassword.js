import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Layout from "../../components/Auth/Layout"

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  let navigate = useNavigate();

  const sendRecoveryEmail = (e) => {
    e.preventDefault();
    console.log("An password reset link has been sent to your email account");
    setEmail('');
  }
  return (
    <Layout>
      <form onSubmit={sendRecoveryEmail}>
        <h3 className="caption-header text-center text-yellow"> Forgot Password? </h3>
        <hr class="short-hr"/>
        <div className='form-group'>
          <label>
            Enter the email address you used in creating your account.
          </label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="e.g. joemike@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <button type="submit" className='btn btn-white-bd-transparent width-100'>
            Send Reset Link
          </button>
        </div>

        <div className='form-group mt-1'>
          <Link className="link-text link-text-white" to="/auth/login"> 
            Login here
          </Link>
        </div>
      </form>
    </Layout>
  )
}

export default ForgotPassword