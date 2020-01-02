import React from 'react'

const SignupAsDonorContainer = (props) => {
    return(
        <div id="user-signup-container">
            <section id="user-signup-input">
                <input type='input' id='signup-username' placeholder='New Username' onChange={props.setSignupId} required />
                <input type='password' id='signup-password' placeholder='New Password' onChange={props.setSignupPassword} required />
                <input type='input' id='signup-phone-number' placeholder='Phone Number' onChange={props.setPhoneNumber} />
                <input type='input' id='signup-organization' placeholder='Your Organization' onChange={props.setSignupOrganization} />
                <input type='input' id='signup-address' placeholder='Organization Address' onChange={props.setAddress} />
                <input type='button' id='signup-button' value='Sign Up As Donor' onClick={props.donorSignupSubmit}/>
                {props.errorMessage}
            </section>
        </div>
    )

}

export default SignupAsDonorContainer;