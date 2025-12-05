const net = require('net');

let server = net.createServer(socket=>{
    socket.on('data',(data)=>{
        console.log("from client : ",data.toString());
        socket.write("hello from server\n")
        socket.write("hello from server")
    })
})

server.listen(5000)