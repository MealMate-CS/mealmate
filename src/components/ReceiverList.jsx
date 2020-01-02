import React, { useState, useEffect } from 'react';

const ReceiverList = () => {

  const [donors, setDonors] = useState([])

  //grab list of donors
  useEffect(() => {
    fetch('/getDonors')
    .then(res => res.json())
    .then(data => setDonors(data))
    .catch(err => console.log(err))
  })

  // const list = donors.map(() => {

  // })

  return(
    <div className='receiver-list'>
      List
    </div>
  )
}

export default ReceiverList;