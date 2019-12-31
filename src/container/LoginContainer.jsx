import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

class LoginContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userId : '',
            password : '',
            userType : '',
            errorMessage : ''
        }

    // this.loginButton = this.loginButton.bind(this)    
    this.setLoginId = this.setLoginId.bind(this)
    this.setLoginPassword  = this.setLoginPassword.bind(this)
    this.loginSubmit = this.loginSubmit.bind(this)
    }

    setLoginId(event) {
        this.setState({userId:event.target.value})
        console.log('event in setloginid', event.target.value)
    }
    setLoginPassword(event) {
        this.setState({password:event.target.value})
        console.log('event in setLoginPassword', event.target.value)
    }
    loginSubmit() {
        const body = {
            userId : this.state.userId,
            password : this.state.password
        }
        // fetch('/')




    }

    

    render() {
        return(
            <div id="user-login-container">
                <section id="user-login-input">
                    <input type='input' id='login-username' placeholder='Your Username' onChange={this.setLoginId} required />
                    <input type='password' id='login-password' placeholder='Your Password' onChange={this.setLoginPassword} required />
                    <input type='button' id='login-button' value='Log In' onClick={this.loginSubmit}/>
                    {this.state.errorMessage}

                </section>

            </div>
        )
    }

}

export default LoginContainer;