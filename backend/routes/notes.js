const express = require('express');
const router = express.Router();


router.get('/' , (req, res) =>{
    // obj ={
    //     a: 'aman', 
    //     number:3453
    // },

    // res.json(obj)

    res.json([])
});

module.exports = router