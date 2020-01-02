const consumerController ={};
const pool = require('../database/database')

consumerController.recentHistory = (req, res, next) => {
    const userId = req.body.userId
    pool.query('SELECT * FROM History WHERE username = $1 ORDER BY created_at DESC LIMIT 10', [userId], (error, results) => {
        if(error){
            throw error
        } else {
        res.locals.results = results;
        }
    })
    next();
}

consumerController.createReservation = (req, res, next) => {
    //need to add DEFAULT NOW() to the created_at column in the History table
    const restaurant = req.body.restaurant;
    // const createdAt = Math.floor(Date.now() / 1000);
    const timeFrame = req.body.timeFrame;
    const userId = req.body.userId;
    pool.query('INSERT INTO History (username, restaurant, timeFrame, createdAt) VALUES ($1, $2, $3, NOW())', [userId, restaurant, timeFrame], (error, results) => {
        if(error) {
            throw error
        } else {
        res.locals.message = `Reservation set for ${restaurant} from ${timeFrame}`
        }
    })
    next();
}
module.exports = consumerController;