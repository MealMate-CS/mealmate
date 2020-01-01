import React from 'react'
import LoginContainer from './LoginContainer.jsx'
import SignupAsDonorContainer from './SignupAsDonorContainer.jsx'
import SignupAsReceiverContainer from './SignupAsReceiverContainer.jsx'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class HomeContainer extends React.Component {
    render() {
        return (
            <Router>
                <div id='home-container'>
                    <Switch>
                        <Route path='/' exact component={LoginContainer} />
                        <Route path='/signupasdonor' component={SignupAsDonorContainer} />
                        <Route path='/signupasreceiver' component={SignupAsReceiverContainer} />                        
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default HomeContainer