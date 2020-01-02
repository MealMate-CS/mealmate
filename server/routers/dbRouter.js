const express = require('express');
const router = express.Router();
const dbController = require('../controller/dbController');

router.post('/donorSignUp',dbController.sendDonorEmail,  (req,res)=>{
    console.log('in donor route')
    res.sendStatus(200);
})
router.post('/receiverSignUp', dbController.receiverSignUp, dbController.sendReceiverEmail,(req,res)=>{
    res.sendStatus(200);
})
router.get('/userLogin',dbController.checkLogin,(req,res)=>{
    res.sendStatus(200);
})

module.exports = router;