import React from 'react';
import { Link } from "react-router-dom";

const LoginContainer = ({ setLoginId, setLoginPassword,loginSubmit, errorMessage }) => {
  return(
    <div id="user-login-container">
      <section id="user-login-input">
        <input type='input' id='login-username' placeholder='Your Username' onChange={setLoginId} required />
        <input type='password' id='login-password' placeholder='Your Password' onChange={setLoginPassword} required />
        <input type='button' id='login-button' value='Log In' onClick={loginSubmit}/>
        {errorMessage}
        <Link to='/signupasreceiver'>
          <input type='button' id='receiver-signup-button' value='Sign Up As Receiver'></input>
        </Link>
        <Link to='/signupasdonor'>
          <input type='button' id='donor-signup-button' value='Sign Up as Donor'></input>
        </Link>
      </section>
    </div>
  )
}

export default LoginContainer;