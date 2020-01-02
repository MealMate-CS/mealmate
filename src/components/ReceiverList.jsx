import React,{ useState, useEffect } from 'react';
import ReceiverItem from './ReceiverItem.jsx';

const ReceiverList = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/consumer/getItems')
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(err => console.log(err))
  }, [])

 
  const list = [];

  items.forEach((element, i) => {
    list.push(<ReceiverItem 
      key={i}
      itemname={element.itemname}
      allergy={element.allergy}
      expirationdate={element.expirationdate}
      name={element.name}
    />)
  })

  return(
    <div id="receiver-list">
      <h3>Items Available</h3>
      {list}
    </div>
  )
}

export default ReceiverList;