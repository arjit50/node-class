const net = require('net')

const client = net.createConnection(5000);

client.on('connect',()=>{
    client.write("hello from client");
})

client.on('data',(data)=>{
    console.log("data from server : ",data.toString());
})