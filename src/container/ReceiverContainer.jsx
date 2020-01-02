import React from 'react';
import Map from '../components/Map.jsx';
import ReceiverList from '../components/ReceiverList.jsx';

const ReceiverContainer = (props) => {
  return(
    <div id="receiver-container">
      <Map/>
      <ReceiverList/>
    </div>
  )
}

export default ReceiverContainer;