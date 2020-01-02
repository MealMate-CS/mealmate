const express = require('express');
const router = express.Router();
const dbController = require('../controller/dbController');

router.post('/donorSignUp',dbController.donorSignUp,(req,res)=>{
    res.status(200).json('Donor Created');
})

router.post('/receiverSignUp', dbController.receiverSignUp,(req,res)=>{
    res.status(200).json('Receiver Created');
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