let {Client} = require('pg')

let client = new Client({
    host:"localhost",
    port : 5432,
    user : 'postgres',
    password : 'Dec@1996',
    database:'mydb'
})

client.connect()
.then(()=>console.log("db connected"))
.catch((err)=>console.log("an error occured",err))

module.exports = client;