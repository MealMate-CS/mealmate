import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LoginContainer from './LoginContainer.jsx'
import Home from '../components/Home.jsx'

const MainContainer = () => {
    return(
        <Router>
            <div class="main-container">
                <Route exact path='/' component={Home} />
                <Route path='/startasdonor' component={LoginContainer} />
                <Route path='/startasreceiver' component={LoginContainer} />
            </div>
        </Router>
    )
}

export default MainContainer;