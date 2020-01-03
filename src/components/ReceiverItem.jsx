import React from 'react';

const ReceiverItem = ({ itemname, allergy, expirationdate, name }) => {
  return(
    <div id='receiver-item'>
      <h5>{itemname}</h5>
      <p>{`restaurant: ${name}`}</p>
      <p>{`allergies: ${allergy}`}</p>
      <p>{`expiration date: ${expirationdate}`}</p>
      <button>Reserve</button>
    </div>
  )
}

export default ReceiverItem;