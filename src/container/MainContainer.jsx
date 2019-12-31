import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import LoginContainer from './LoginContainer.jsx'


const MainContainer = () => {
    return(
        <Router>
            <div class="main-container">
                <ul>
                    <li><Link to="/startasdonor">Start as Donor</Link></li>
                    <li><Link to="/startasreceiver">Start as Receiver</Link></li>
                </ul>
                <Route path='/startasdonor' component={LoginContainer}/>
                <Route path='/startasreceiver' component={LoginContainer}/>
            </div>
        </Router>
    )
}

export default MainContainer;