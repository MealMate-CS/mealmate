const express = require('express');
const router = express.Router();
const producerController = require('../controller/producerController');
router.get('/getAddresses', producerController.getAddress,(req,res)=>{
    res.json(res.locals.addresses);
})
router.post('/addItems', producerController.addMenuItems, (req,res)=>{
    res.sendStatus(200);
})
router.post('/pushItemsToMenu', producerController.pushItemIntoMenuTable,(req,res)=>{
    res.sendStatus(200);
})
router.get('/getDisplayItems',producerController.displayItems, (req,res)=>{
    res.json(res.locals.items);
})
module.exports = router;