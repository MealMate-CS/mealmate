
const consumerController ={};
const pool = require('../database/database')
const nodemailer = require('nodemailer');

consumerController.recentHistory = (req, res, next) => {
    const userId = req.body.userId
    pool.query('SELECT * FROM History WHERE username = $1 ORDER BY created_at DESC LIMIT 10', [userId], (error, results) => {
        if(error){
            throw error
        } else {
        res.locals.results = results;
        }
    })
    return next();
}

consumerController.createReservation = (req, res, next) => {
    //need to add DEFAULT NOW() to the created_at column in the History table
    const restaurant = req.body.restaurant;
    // const createdAt = Math.floor(Date.now() / 1000);
    const timeFrame = req.body.timeFrame;
    const userId = req.body.userId;
    pool.query('INSERT INTO History (username, restaurant, time_frame, created_at) VALUES ($1, $2, $3, NOW())', [userId, restaurant, timeFrame], (error, results) => {
        if(error) {
            throw error
        } else {
        res.locals.message = `Reservation set for ${restaurant} from ${timeFrame}`
        }
    })
    return next();
}

consumerController.getMenuItems = (req,res,next)=>{
    const text= 'SELECT * FROM Menu';
    db.query(text,(err,data)=>{
        if(err) return err;
        else{
            res.locals.data = data.rows;
            return next();
        }
    })
}


consumerController.sendReservationEmail = (req, res, next) => {
    console.log('trying to send reservation email')
    const restaurant = req.body.restaurant;
    const username = req.body.userId;
    const timeFrame = req.body.timeFrame;
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'MealMate747@gmail.com',
            pass: 'MealMate1234'
        }
    });
    const messageBody = `This message serves to confirm that you have set a reservation for ${restaurant} set at ${timeFrame}.`
    const mailOptions = {
        from: 'MealMate747@gmail.com',
        to: username,
        subject: 'Reservation Confirmation',
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

module.exports = consumerController;