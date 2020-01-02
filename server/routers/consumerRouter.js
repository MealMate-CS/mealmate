const express = require('express');
const router = express.Router();
const consumerController = require('../controller/consumerController');


router.get('/recents', consumerController.recentHistory, (req, res) => {
    res.status(200).json({ history: res.locals.results });
})

router.post('/reservation', consumerController.createReservation, consumerController.sendReservationEmail, (req, res) => {
    res.sendStatus(200).json({ message: res.locals.message });
})
router.get('/menuItems',consumerController.getMenuItems,(req,res)=>{
    res.json(res.locals.data);
})


module.exports = router;