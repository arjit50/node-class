const express = require('express')
const app = express();
const userRoute = require('./userRoutes')
const productRoutes = require('./productRoutes')

app.use('/',userRoute)
app.use('/product',productRoutes)

app.get('/',(req,res)=>{
    res.send("welcom to our website")
})


app.listen(5000)