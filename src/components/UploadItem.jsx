import React from 'react'
const UploadItem = (props) => {
    console.log(props)
    return(
        <div id='upload-item'>
            <h1>Upload Item</h1>
            Item Name
            <input type='input' placeholder='Brief Description' onChange={props.setItemName} required />
            <section id='allergens'>
            Please check for any possible allergens inside the food<br/>
                {props.allergens}
                <input type='checkbox' value='shellfish' onClick={props.setAllergens}/>Shellfish
                <input type='checkbox' value='gluten' onClick={props.setAllergens}/>Gluten
                <input type='checkbox' value='dairy' onClick={props.setAllergens}/>Dairy
                <input type='checkbox' value='nut' onClick={props.setAllergens}/>Nut
            </section>
            Expiration Date<br/>
            <input type='input' placeholder='Expiration Date' onChange={props.setExpirationDate} require/>
        </div>
    )
}
export default UploadItem;