import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Grid, Button} from '@material-ui/core'


const Home = () => {
  return(
    <div>
      <Grid>
        <Button>
          <Link to="/startasdonor">Start as Donor</Link>
        </Button>
      </Grid>
      <Grid>
        <Button>
          <Link to="/startasreceiver">Start as Receiver</Link>
        </Button>
      </Grid>
    </div>
  )
}

export default Home;