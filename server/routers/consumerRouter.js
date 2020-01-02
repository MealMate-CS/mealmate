const express = require('express');
const router = express.Router();
const consumerController = require('../controller/consumerController');


router.get('/recents', consumerController.recentHistory, (req, res) => {
    res.status(200).json(res.locals.results);
})

router.post('/reservation', consumerController.createReservation, (req, res) => {
    res.sendStatus(200)
})


module.exports = router;