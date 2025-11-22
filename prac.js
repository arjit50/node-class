const express = require('express')
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.get('/',async (req,res)=>{
   let password = "arjit123"
   let hashedPass = await bcrypt.hash(password,10);
   console.log("hashed password : ",hashedPass)
   let isMatch = await bcrypt.compare("arjit123",hashedPass)
   if(!isMatch) console.log("password not matched")
   else{
        let token = jwt.sign({userId:123456,username:"arjit"},"SECRET_KEY",{expiresIn:'1hr'})
        console.log("json web token : ",token)
}
    res.send("working");
})

app.listen(5000)







