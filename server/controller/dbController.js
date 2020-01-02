const dbController = {};
const nodemailer = require('nodemailer')

const db = require('../database/database');
dbController.donorSignUp = (req,res,next) =>{
    console.log('trying to signup as donor')
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
dbController.sendDonorEmail = (req, res, next) => {
    console.log('trying to send email')
    const user = req.body.newUserId;
    const name = req.body.newUserOrganization;
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'MealMate747@gmail.com',
            pass: 'MealMate1234'
        }
    });
    const messageBody = `Thank you for signing up to MealMate! This message is to confrim that you have signed up your restaurant ${name} as a Donor with the username ${user}.`
    const mailOptions = {
        from: 'MealMate747@gmail.com',
        to: user,
        subject: 'Sign Up Confirmation',
        text: messageBody
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        } else {
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
    return next();
};
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
};
dbController.sendReceiverEmail = (req, res, next) => {
    console.log('trying to send receiver email')
    const username = req.body.newUserId;
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'MealMate747@gmail.com',
            pass: 'MealMate1234'
        }
    });
    const messageBody = `Thank you for signing up to MealMate! This message is to confrim that you have signed up as a Receiver with the username ${username}.`
    const mailOptions = {
        from: 'MealMate747@gmail.com',
        to: username,
        subject: 'Sign Up Confirmation',
        text: messageBody
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        } else {
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
    return next();
};
dbController.checkLogin = (req,res,next) =>{
    const user = req.body.userId;
    const pass = req.body.password;
    const text = 'SELECT * FROM Receiver WHERE username = $1 AND password = $2';
    const params = [user, pass]
    db.query(text,params,(err,data)=>{
        if(err){
            const nest_text = 'SELECT * FROM Donor WHERE username = $1 AND password = $2';
            db.query(nest_text,params, (err,data)=>{
                if(err) return err;
                else{
                    res.locals.type = 'Donor'
                    return next();
                }
            })
        }
        else{
            res.locals.type = 'Receiver';
            return next();
        }
    })
}

module.exports = dbController;