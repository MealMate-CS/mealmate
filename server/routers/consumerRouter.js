const express = require('express');
const router = express.Router();
const consumerController = require('../controller/consumerController');

router.get('/recents', consumerController.recentHistory, (req, res) => {
    res.status(200).json({ history: res.locals.results });
})

router.post('/reservation', consumerController.createReservation, (req, res) => {
    res.sendStatus(200).json({ message: res.locals.message });
})

module.exports = router;