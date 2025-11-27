const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`<form action="/login" method="POST">
            <input type="text" placeholder="enter username" name="username"/>
            <input type="password" placeholder="enter password" name="password"/>
            <button>Submit</button>
        </form>`)
})  



app.post('/login',(req,res)=>{
    let {username,password} = req.query;
    res.send(`<h1>username : ${username}</h1>
        <h2>password : ${password}</h2>`)
})

app.listen(5000);

