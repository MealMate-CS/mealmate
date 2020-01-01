import React from 'react'

class SignupAsReceiverContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUserId : '',
            newPassword : '',
            errorMessage: '',
            newUserPhoneNumber: ''
        }
        this.setSignupId = this.setSignupId.bind(this)
        this.setSignupPassword  = this.setSignupPassword.bind(this)
        this.signupSubmit = this.signupSubmit.bind(this)
        this.setPhoneNumber = this.setPhoneNumber.bind(this)
    }

    setSignupId(event) {
        this.setState({newUserId:event.target.value})
        console.log()
    }
    setSignupPassword(event) {
        this.setState({newPassword:event.target.value})
    }
    setPhoneNumber(event) {
        this.setState({newUserPhoneNumber:event.target.value})
    }
    signupSubmit() {
        const body = {
            newUserId : this.state.newUserId,
            newPassword : this.state.newPassword,
            newUserPhoneNumber : this.state.newUserPhoneNumber
        }
        console.log('body for signupSubmit is', body)
        fetch('/receiversignup', {
            method: 'POST', 
            body: JSON.stringify(body), 
            headers : {'Content-Type': 'application/json'}
        })
        .then(data => data.json())
        .then(result => {
            console.log('result in loginSubmit =>', result)
        })
        .catch(err => {
            console.log(err)
            this.setState({errorMessage: JSON.stringify(err)    })
        })
    }

    render() {
        return(
            <div id="user-signup-container">
                <section id="user-signup-input">
                    <input type='input' id='signup-username' placeholder='New Username' onChange={this.setSignupId} required />
                    <input type='password' id='signup-password' placeholder='New Password' onChange={this.setSignupPassword} required />
                    <input type='input' id='signup-phone-number' placeholder='Phone Number' onChange={this.setPhoneNumber} required />
                    <input type='button' id='signup-button' value='Sign Up As Receiver' onClick={this.signupSubmit}/>
                    {this.state.errorMessage}
                </section>
            </div>
        )
    }
}

export default SignupAsReceiverContainer;