import React from 'react';
import LoginContainer from './LoginContainer.jsx';
import SignupAsDonorContainer from './SignupAsDonorContainer.jsx';
import SignupAsReceiverContainer from './SignupAsReceiverContainer.jsx';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

const HomeContainer = ({ setLoginId, setLoginPassword, errorMessage }) => {
  return (
    <Router>
      <div id='home-container'>
        <Switch>
          <Route 
            exact path='/' 
            render={() => (
              <LoginContainer
                setLoginId={setLoginId} 
                setLoginPassword={setLoginPassword}  
                errorMessage={errorMessage}
              />
            )} 
          />
          <Route 
            path='/signupasdonor' 
            render={() => (
              <SignupAsDonorContainer/>
            )}
          />
          <Route 
            path='/signupasreceiver' 
            render={() => (
              <SignupAsReceiverContainer/>
            )} 
          />                        
        </Switch>
      </div>
    </Router>
  )
}

export default HomeContainer;