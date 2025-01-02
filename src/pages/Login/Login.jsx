import React, { useState } from 'react'
import './Login.css'


function Login() {
  const [signState,setSignState]=useState("Sign In")
  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo-Netflix" />
      <div className="login-form">
        <h1>{ signState }</h1> 
        <form action="">
          {signState === "Sign Up" ? <input type="text" placeholder="YourName"/>:<></>}
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <button>{ signState }</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox" />
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? <p>New to Netflix? <span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span> </p> : <p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span> </p>}
        </div>
      </div>
    </div>
  )
}

export default Login
