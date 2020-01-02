const express = require('express');
const router = express.Router();
const dbController = require('../controller/dbController');

router.post('/donorSignUp',dbController.donorSignUp,dbController.sendDonorEmail,  (req,res)=>{
    res.sendStatus('Donor Created');
})
router.post('/receiverSignUp', dbController.receiverSignUp, dbController.sendReceiverEmail,(req,res)=>{
    res.sendStatus('Receiver Created');
})
router.post('/userLogin', dbController.checkLogin,(req,res)=>{
    res.status(200).json(res.locals.userInfo);
})

module.exports = router;