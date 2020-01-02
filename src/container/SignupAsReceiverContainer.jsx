import React from 'react';

const SignupAsReceiverContainer = (props) => {
    return(
        <div id="user-signup-container">
            <section id="user-signup-input">
                <input type='input' id='signup-username' placeholder='New Username' onChange={props.setSignupId} required />
                <input type='password' id='signup-password' placeholder='New Password' onChange={props.setSignupPassword} required />
                <input type='input' id='signup-phone-number' placeholder='Phone Number' onChange={props.setPhoneNumber} required />
                <input type='button' id='signup-button' value='Sign Up As Receiver' onClick={props.receiverSignupSubmit}/>
                {props.errorMessage}
            </section>
        </div>
    )

}

export default SignupAsReceiverContainer;