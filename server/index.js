let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
     console.log(message);
      io.emit('new-message',message);
    });
    // once a client has connected, we expect to get a ping from them saying what room they want to join
    socket.on('room', function(room) {
        console.log(room);
        console.log(socket.adapter.rooms);
        socket.join(room);
        io.emit('roomList',socket.adapter.rooms)
    });

});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});


