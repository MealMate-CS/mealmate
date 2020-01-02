import React from 'react'
import LoginContainer from './LoginContainer.jsx'
import SignupAsDonorContainer from './SignupAsDonorContainer.jsx'
import SignupAsReceiverContainer from './SignupAsReceiverContainer.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";

const HomeContainer = (props) => {
    return (
        <Router>
            <div id='home-container'>
                <Route path='/' exact render={()=> <LoginContainer password={props.password}
                userType={props.userType} userId={props.userId} isLoggedInAsDonor={props.isLoggedInAsDonor}
                isLoggedInasReceiver={props.isLoggedInasReceiver}
                setLoginId={props.setSignupId} setLoginPassword={props.setSignupPassword}
                loginSubmit={props.loginSubmit} errorMessage={props.errorMessage}
                />}/>
                <Route path='/signupasdonor' render={() => <SignupAsDonorContainer 
                newUserId={props.newUserId} newPassword={props.newPassword} errorMessage={props.errorMessage}
                newUserPhoneNumber={props.newUserPhoneNumber} newUserOrganization={props.newUserOrganization} 
                newUserAddress={props.newUserAddress} setSignupId={props.setSignupId} 
                setPhoneNumber={props.setPhoneNumber} setSignupOrganization={props.setSignupOrganization}
                setAddress={props.setAddress} 
                setSignupPassword={props.setSignupPassword} donorSignupSubmit={props.donorSignupSubmit}
                />} />
                <Route path='/signupasreceiver' render={() => <SignupAsReceiverContainer 
                newUserId={props.newUserId} newPassword={props.newPassword}
                errorMessage={props.errorMessage} newUserPhoneNumber={props.newUserPhoneNumber}
                setSignupId={props.setSignupId} setSignupPassword={props.setSignupPassword}
                setPhoneNumber={props.setPhoneNumber} receiverSignupSubmit={props.receiverSignupSubmit}
                />}/>
            </div>
        </Router>
    )
}


export default HomeContainer