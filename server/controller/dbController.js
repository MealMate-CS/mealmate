const dbController = {};

const db = require('../database/database');
dbController.donorSignUp = (req,res,next) =>{
    const user = req.body.newUserId;
    const pass = req.body.newPassword;
    const phoneNumber = req.body.newUserPhoneNumber;
    const name = req.body.newUserOrganization;
    const address = req.body.newUserAddress;
    const text = 'INSERT INTO Donor (username,password, phoneNumber,name,address) VALUES($1,$2,$3,$4,$5)';
    const values = [user,pass,phoneNumber,name,address];
    
    db.query(text,values,(err,data)=>{
        if(err) return err;
        else{
            return next();
        }
    })
}
dbController.receiverSignUp = (req, res, next) =>{
    const user = req.body.newUserId;
    const pass = req.body.newPassword;
    const phoneNumber = req.body.newUserPhoneNumber;
    console.log(user, pass, phoneNumber)
    const text = 'INSERT INTO Receiver (username, password, phoneNumber) VALUES($1,$2,$3)';
    const values = [user,pass,phoneNumber];
    db.query(text,values, (err,data)=>{ 
        if(err) return err;
        else{
            console.log(data);
            return next();
        }
    })
}
dbController.checkLogin = (req,res,next) =>{
    const user = req.body.userId;
    const pass = req.body.password;
    const text = 'SELECT * FROM Receiver WHERE username = $1 AND password = $2';
    const params = [user, pass]
    db.query(text,params,(err,data)=>{
        console.log('data is', data.rows) 
        if (data.rows.length === 0) {
            const nest_text = 'SELECT * FROM Donor WHERE username = $1 AND password = $2';
            db.query(nest_text, params, (err, result) => {
                if (result.rows.length === 0) {
                    res.locals.userInfo = 'No Such User Exists'
                    console.log(res.locals.userInfo)
                    return next()
                } else {
                    console.log('user exsists and info is', result.rows[0])
                    res.locals.userInfo = result.rows[0]
                    return next()
                }
            })
        } else if (data.rows.length > 0) {
            res.locals.userInfo = data.rows[0]
            return next()
        }
        if(err) {
            return err
        }
    })
}

module.exports = dbController;