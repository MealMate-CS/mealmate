import React from 'react';
import Map from '../components/Map.jsx';

const ReceiverContainer = (props) => {
  return(
    <div id="receiver-container">
      Hello {props.userId}
      <Map/>
    </div>
  )
}

export default ReceiverContainer;