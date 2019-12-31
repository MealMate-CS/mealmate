import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Home = () => {
  return(
    <div>
      <ui>
        <li><Link to="/startasdonor">Start as Donor</Link></li>
        <li><Link to="/startasreceiver">Start as Receiver</Link></li>
      </ui>
    </div>
  )
}

export default Home;