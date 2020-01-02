const express = require('express');
const router = express.Router();
const dbController = require('../controller/dbController');

router.post('/donorSignUp',dbController.donorSignUp,(req,res)=>{
    res.json('Donor');
})
router.post('/receiverSignUp', dbController.receiverSignUp,(req,res)=>{
    res.json('Receiver');
})

router.get('/userLogin',dbController.checkLogin,(req,res)=>{
    res.json(res.locals.type);
})

module.exports = router;