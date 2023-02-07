/**
 * Module dependencies.
 */
const app = require("./app.js");
const http = require("http");
const config = require("./configs/config.js");
const chalk = require("chalk");


const server_port = normalizePort(String(config.app.port));
app.set("port", server_port);
 
const server = http.createServer(app);


server.on("error", onError);
server.listen(server_port);
server.on("listening", async() =>{
    console.log(chalk.bold.cyanBright("[APP] ") + chalk.bold.whiteBright(`Localhost : http://${config.app.address}:${config.app.port}`));
    console.log(chalk.bold.cyanBright("[APP] ") + chalk.bold.whiteBright(`Listening on port : `) + chalk.bold.yellowBright(String(config.app.port)));
});
 


function normalizePort(val) {
    let port = parseInt(val, 10);
   
    if (isNaN(port)) {
       // named pipe
        return val;
    }
   
    if (port >= 0) {
       // port number
        return port;
    }
   
    return false;
}
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
   
    let bind = typeof server_port === "string" ? "Pipe " + server_port : "Port " + server_port;
   
     // handle specific listen errors with friendly messages
     switch (error.code) {
       case "EACCES":
         console.error(bind + " requires elevated privileges");
         process.exit(1);
         break;
       case "EADDRINUSE":
         console.error(bind + " is already in use");
         process.exit(1);
         break;
       default:
         throw error;
     }
 }
 
