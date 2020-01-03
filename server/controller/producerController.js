const producerController= {};
// const WebHDFS = require('webhdfs');
const db = require('../database/database');
//this is when the producer wants to add specific items
producerController.addMenuItems = (req,res,next) =>{
    console.log('wtf')
    // console.log(req)
    const itemName = req.body.itemName;
    const itemAllergy = JSON.stringify(req.body.itemAllergy);
    const expirationDate = req.body.expirationDate;
    const name= req.body.name;
    const text ='INSERT INTO Menu (itemName, allergy, expirationDate, name) VALUES($1,$2,$3,$4)';
    const values = [itemName,itemAllergy,expirationDate,name];
    console.log(values)
    db.query(text,values,(err,data)=>{
        if(err) return err;
        else{
            console.log(data);
            return next();
        }
    })
//     const itemName =req.body.itemName;
//     const itemAllergy = req.body.itemAllergy;
//     const expirationDate = req.body.expirationDate;
//     const name= req.body.name;
//     const text ='INSERT INTO Menu (itemName, allergy, expirationDate, name) VALUES'
//     for(let i =0; i < itemName.length;i+=1){
//         let additionalText = `(${itemName},${itemAllergy},${expirationDate},${name})`
//         text.concat(additionalText);
//         if(i <itemName.length-1){
//             let comma = ','
//             text.concat(comma);
//         }
//         if(i == itemName.length-1){
//             let semi = ';'
//             text.concat(semi);
//         }
//     }
}
producerController.producerItems =(req,res,next)=>{
    const text = 'SELECT * FROM Menu where name = $1';
    const value = [req.body.name];
    db.query(text,value,(err,data)=>{
        if(err) return err;
        else{
            res.locals.data = data.rows;
            return next();
        }
    })
}
//grab from google places based on address;
//this will be used for getting hours and used later on
// producerController.getHours = (req,res,next) =>{
// }
//this is for the producers to select which items which have already been added;
producerController.displayItems = (req,res,next) =>{
    let restaurantName = req.body.restaurantName;
    let text = 'SELECT name FROM Donor WHERE name = $1';
    let value = [restaurantName];
    db.query(text, value, (err, data)=>{
        if(err) return err;
        else{
            let id = data.rows[0];
            const newText = 'SELECT * FROM Menu WHERE name = $1';
            const value = [id];
            db.query(newText, value,(err,data)=>{
                if(err) return err;
                else{
                    res.locals.items = data.rows;
                    return next();
                }
            })
        }
    })
}
producerController.getAddress = (req,res,next) =>{
    const text = 'SELECT address from Producer';
    db.query(text,(err,data)=>{
        if(err) return err;
        else{
            res.locals.addresses = data.rows;
            return next();
        }
    })
}
producerController.pushItemIntoMenuTable = (req,res,next) =>{
    let itemArray =req.body.itemArray;
    let menuId = req.body.menuId;
    let quantity = req.body.quantityArray;
    const text= 'INSERT INTO CurrentMenu (itemName, name, quantity) VALUES ';
    for(let i =0; i <itemArray.length; i+=1){
        let additionalText = `( ${itemArray[i]} , ${menuId}, ${quantity[i]})`;
        text.concat(additionalText);
        if(i <itemArray.length-1){
            let comma = ','
            text.concat(comma);
        }
        if(i == itemArray.length-1){
            let semi = ';'
            text.concat(semi);
        }
    }
    db.query(text,(err,data) =>{
        if(err) return err;
        else{
            return next();
        }
    })
}
module.exports = producerController;



