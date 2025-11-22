let express = require('express')
let app = express();

app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
})

//red        /^\/admin/
app.all(/^\/admin/,(req,res,next)=>{
    console.log("Admin Gaurd running for all  /admin routes");
    next();
})

app.get('/',(req,res)=>{
    res.send("Home Page is here")
})

app.get('/admin',(req,res)=>{
    res.send("admin Dashboard");    
})


app.get('/admin/users',(req,res)=>{
    res.send('Admin user list')
})

app.listen(5000);