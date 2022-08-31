import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Layout from "../../components/Auth/Layout"

const EmailVerification = () => {
  const sendRecoveryEmail = (e) => {
    e.preventDefault();
    console.log("An verification link has been sent to your email address.");
  }
  
  return (
    <Layout>
      <form onSubmit={sendRecoveryEmail}>
        <h3 className="caption-header text-yellow text-center"> Verify Email Address </h3>
        <hr class="short-hr"/>
        <div className='form-group'>
          <label>
            A verification link has been sent to your mail. Please check your email 
            and click on the link.
          </label>
        </div>
        <div className='form-group mt-2'>
          {/* Did not receive any mail? */}
          <button type="submit" className='btn btn-white-bd-transparent width-100'>
            Resend Link
          </button>
        </div>
        
        <div className='form-group mt-1'>
          <Link className="link-text link-text-white" to="/"> 
            Go back home
          </Link>
        </div>

      </form>
    </Layout>
  )
}

export default EmailVerification