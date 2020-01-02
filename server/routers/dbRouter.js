const express = require('express');
const router = express.Router();
const dbController = require('../controller/dbController');

router.post('/donorSignUp',dbController.donorSignUp,dbController.sendDonorEmail,  (req,res)=>{
    res.sendStatus(200);
})
<<<<<<< HEAD
router.post('/receiverSignUp', dbController.receiverSignUp, dbController.sendReceiverEmail,(req,res)=>{
    res.sendStatus(200);
=======

router.post('/receiverSignUp', dbController.receiverSignUp,(req,res)=>{
    res.status(200).json('Receiver Created');
>>>>>>> 2f0e28f2f3896afbc8fc0c1e12770c6086a836bd
})

router.post('/userLogin', dbController.checkLogin,(req,res)=>{
    res.status(200).json(res.locals.userInfo);
    res.json('Donor');
})

router.post('/receiverSignUp', dbController.receiverSignUp,(req,res)=>{
    res.json('Receiver');
})

router.get('/userLogin',dbController.checkLogin,(req,res)=>{
    res.json(res.locals.type);
})

module.exports = router;