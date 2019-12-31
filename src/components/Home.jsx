import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Grid, Button} from '@material-ui/core'


const Home = () => {
  return(
    <div class='login-home'>
      <Button variant="contained" color="primary">
        <Link to="/startasdonor">Start as Donor</Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/startasreceiver" >Start as Receiver</Link>
      </Button>
    </div>
  )
}

export default Home;