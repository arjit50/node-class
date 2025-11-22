//red express.Router() is a mini express application that you can use to create modular,seprate files

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log(new Date().toLocaleString());
    next();
});

router.get('/userInfo',(req,res)=>{
    res.send("this is user information page")
})

router.get('/userDashboard',(req,res)=>{
    res.send("this is user dashboard")
})

router.post('/',(req,res)=>{
    res.send("data saved")
})

module.exports = router;