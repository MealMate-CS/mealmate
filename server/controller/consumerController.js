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

consumerController.getAddress = (req, res, next) => {
  const text = 'SElECT address FROM donor'
  pool.query(text, (error, results) => {
    if (error){
      throw error;
    } else {
      res.locals.results = results.rows
      return next();
    }
  })
}

consumerController.getItems = (req, res, next) => {
  const text = `SELECT * FROM menu`
  pool.query(text, (error, results) => {
    if (error){
      throw error;
    } else {
      res.locals.results = results.rows
      return next();
    }
  })
}

module.exports = consumerController;

