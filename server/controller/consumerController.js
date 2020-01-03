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
      },
      tls:{
          rejectUnauthorized: false
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
