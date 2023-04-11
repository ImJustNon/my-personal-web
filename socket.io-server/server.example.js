const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

app.use(cors());

app.get("/", (req, res) =>{
  return res.json({
    status: "ONLINE",
    error: null,
  });
});

io.on('connection', (socket) => {
  console.log('[Alert] ✅ client connected ID : ' + socket.id);

  socket.on('disconnect', () => {
    console.log('[Alert] ⚠ client disconnected ID : ' + socket.id);
  });
});

http.listen(3000, () => {
  console.log('Listening on port 3000');
});




/*
  const { Server } = require("socket.io");
  const io = new Server(3000);
  io.on("connection", () =>{
    console.log("connected");
  });
*/