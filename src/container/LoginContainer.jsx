import React from 'react';
import {Link} from "react-router-dom";

const LoginContainer = (props) => {
    return(
        <div id="user-login-container">
            <section id="user-login-input">
                <input type='input' id='login-username' placeholder='Your Username' onChange={props.setLoginId} required />
                <input type='password' id='login-password' placeholder='Your Password' onChange={props.setLoginPassword} required />
                <button type='button' className="btn btn-warning" value='Log In' onClick={props.loginSubmit}>Log In</button>
                {/* {props.errorMessage} */}
                <Link to='/signupasreceiver'>
                    <button type='button' className="btn btn-warning" value='Sign Up As Receiver'>Sign Up as Receiver</button>
                </Link>
                <Link to='/signupasdonor'>
                    <button type='button' className="btn btn-warning" value='Sign Up as Donor'>Sign Up as Donor</button>
                </Link>
            </section>
        </div>
    )
}

export default LoginContainer;