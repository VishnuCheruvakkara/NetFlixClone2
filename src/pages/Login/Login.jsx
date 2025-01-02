import React, { useState } from 'react'
import './Login.css'
import {login,signup} from '../../firebase/firebase'

function Login() {
  const [signState, setSignState] = useState("Sign In")
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const user_auth = async (event) => {
    event.preventDefault();
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.error("Authentication failed", error);
    }
  };
  
 
  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo-Netflix" />
      <div className="login-form">
        <h1>{ signState }</h1> 
        <form action="">
          {signState === "Sign Up" ?
          <input value={name} onChange={(event) => { setName(event.target.value)}} type="text" placeholder="YourName" /> : <></>}
          <input value={email} onChange={(event) => { setEmail(event.target.value)}} type="email" placeholder="Your Email" />
          <input value={password} onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder="Password" />
          <button onClick={user_auth} type="submit" >{ signState }</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox" id="rememberMe"/>
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
