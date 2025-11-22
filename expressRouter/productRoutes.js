const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("this is user product list")
})

module.exports = router;