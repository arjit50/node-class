let express = require('express')
let {createServer} = require("http")
let {Server} = require('socket.io')
const path = require('path')

let app = express();
let server = createServer(app)
const io = new Server(server)

app.use(express.static(path.resolve('./public')))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./public/inde.html'));
})

io.on('connection',(socket)=>{
    console.log("user is connected")
})

server.listen(5000,()=>{
    console.log("server is running at port 5000")
})
