const app = require("./app.js");
const config = require("./configs/config.js");
const { normalizePort } = require("./utils/nornalizePort.js");
const { onError } = require("./utils/portErrorHandler.js");


const http = require("http");
const chalk = require("chalk");
const socket = require('socket.io');


const server = http.createServer(app);
const io = socket(server);


const server_port = normalizePort(String(config.app.port));
app.set("port", server_port);


// socketio
io.on('connection', (socket) => {
    console.log('[Socket.io] ✅ client connected ID : ' + socket.id);
    socket.on('disconnect', () => {
        console.log('[Socket.io] ⚠  client disconnected ID : ' + socket.id);
    });
});


server.listen(server_port);

server.on("listening", async() =>{
    console.log(chalk.bold.cyanBright("[APP] ") + chalk.bold.whiteBright(`Localhost : ${config.app.address}:${config.app.port}`));
    console.log(chalk.bold.cyanBright("[APP] ") + chalk.bold.whiteBright(`Listening on port : `) + chalk.bold.yellowBright(String(config.app.port)));
});

server.on("error", onError);