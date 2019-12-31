import React from 'react'
import LoginContainer from './LoginContainer.jsx'
import SignupContainer from './SignupContainer.jsx'
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
                        <Route path='/signup' component={SignupContainer} />                        
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default HomeContainer