const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()

const server = http.createServer(app)

// ✅ Create socket server
const io = new Server(server)

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})


// ✅ SOCKET LOGIC
io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id)

  socket.on("send-message", (msg) => {
    console.log("Message:", msg)

    // Send to all clients
    io.emit("receive-message", msg)
  })

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id)
  })
})

// ✅ START SERVER
server.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000")
})
