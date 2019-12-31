import React from 'react'

class SignupContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUserId : '',
            newPassword : '',
            newUserType : '',
            errorMessage: ''
        }
        this.setSignupId = this.setSignupId.bind(this)
        this.setSignupPassword  = this.setSignupPassword.bind(this)
        this.signupSubmit = this.signupSubmit.bind(this)
    }

    setSignupId(event) {
        this.setState({userId:event.target.value})
    }
    setSignupPassword(event) {
        this.setState({password:event.target.value})
    }
    signupSubmit() {
        const body = {
            newUserId : this.state.newUserId,
            newPassword : this.state.newPassword,
            newUserTye : this.state.newUserType
        }
        fetch('/usersignup', {
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
            this.setState({errorMessage: `${JSON.stringify(err)}`})
        })
    }

    render() {
        return(
            <div id="user-signup-container">
                <section id="user-signup-input">
                    <input type='input' id='signup-username' placeholder='New Username' onChange={this.setSignupId} required />
                    <input type='password' id='signup-password' placeholder='New Password' onChange={this.setSignupPassword} required />
                    <input type='button' id='signup-button' value='Sign Up' onClick={this.SignupSubmit}/>
                    {this.state.errorMessage}
                </section>
            </div>
        )
    }





}

export default SignupContainer;