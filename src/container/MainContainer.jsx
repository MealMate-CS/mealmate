import React, { Component } from 'react';
import HomeContainer from './HomeContainer.jsx';
import ReceiverContainer from '../container/ReceiverContainer.jsx';
import Slideshow from '../components/Slideshow.jsx';

class MainContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userId : '',
      password : '',
      userType : '',
      errorMessage : '',
      isLoggedInAsDonor: false,
      isLoggedInAsReceiver: false,
    }
  }

  // Login Container functions
  setLoginId = event => {
    this.setState({ userId: event.target.value })
    // console.log('event in setloginid', event.target.value)
  }

  setLoginPassword = event => {
    this.setState({ password: event.target.value })
    // console.log('event in setLoginPassword', event.target.value)
  }

  loginSubmit = () => {
    const body = {
      userId : this.state.userId,
      password : this.state.password
    }
    fetch('/userlogin', {
      method: 'GET', 
      body: JSON.stringify(body), 
      headers : {'Content-Type': 'application/json'}
    })
    .then(data => data.json())
    .then(result => {
      // Need to check whether logged in as donor or receiver
      console.log('result in loginSubmit =>', result)
    })
    .catch(err => {
      console.log(err)
      this.setState({errorMessage: `${JSON.stringify(err)}`})
    })
  }

  render() {

    // conditional rendering to display HomeContainer (Login/Signup pages)
    let HomePage = null;
    let SlideshowPage = null;
    if(this.state.isLoggedInAsDonor === false && this.state.isLoggedInAsReceiver === false ){
      HomePage =  <HomeContainer 
      setLoginId={this.setLoginId} 
      setLoginPassword={this.setLoginPassword}  
      errorMessage={this.state.errorMessage}
      />;
      SlideshowPage = <Slideshow/>;
    }

    // conditional rendering to display ReceiverContainer
    let ReceiverPage = null;
    if(this.state.isLoggedInAsReceiver === true){
      ReceiverPage = <ReceiverContainer/>
    }

    return(
      <div>
        {SlideshowPage}
        <div id='main-container'>
          {HomePage}
          {ReceiverPage}
        </div>
      </div>
    )    
  }
}

export default MainContainer;