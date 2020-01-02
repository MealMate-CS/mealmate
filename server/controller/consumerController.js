
const consumerController ={};
const pool = require('../database/database')

consumerController.recentHistory = (req, res, next) => {
    const username = req.body.username
    pool.query('SELECT Consumer.history FROM User, Consumer WHERE User.$1 = Consumer.username', [username], (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows)
    })
}

consumerController.createReservation = (req, res, next) => {
    const restaurant = req.body.restaurant;
    const createdAt = req.body.createdAt;
    const timeFrame = req.body.timeFrame;
    pool.query('INSERT INTO Consumers (history) VALUES ($1, $2, $3)', [restaurant, createdAt, timeFrame], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).send(`Reservation set for ${restaurant} from ${timeFrame}`)
    })
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
module.exports = consumerController;