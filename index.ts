import express from "express"
import cors from 'cors'
import { Server } from "socket.io"
import http from 'http'

const app = express();

app.use(cors);

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET","POST"]
  }
});

io.on("connection", (socket) => {
  console.log(`${socket.id}`)
  socket.on("sent-message", (message) => {
    // console.log(message)
    io.emit("received-message",message)
  })
})

httpServer.listen(4000, () => {
  console.log('listening on port 4000');
})