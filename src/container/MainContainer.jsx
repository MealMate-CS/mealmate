import React from 'react';
import ReactDOM from 'react-dom';
import SlideShow from '../components/Slideshow.jsx'
import HomeContainer from './HomeContainer.jsx'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class MainContainer extends React.Component {
    render() {
        return(
            <div>
                <SlideShow/>
                <div id='main-container'>
                    <HomeContainer/>
                </div>
            </div>
        )    
    }
}

export default MainContainer;