const app = require("./app.js");
const config = require("./configs/config.js");
const { normalizePort } = require("./utils/nornalizePort.js");
const { onError } = require("./utils/portErrorHandler.js");

const http = require("http");
const chalk = require("chalk");


const server_port = normalizePort(String(config.app.port));
app.set("port", server_port);


const server = http.createServer(app);

server.listen(server_port);

server.on("listening", async() =>{
    console.log(chalk.bold.cyanBright("[APP] ") + chalk.bold.whiteBright(`Localhost : http://${config.app.address}:${config.app.port}`));
    console.log(chalk.bold.cyanBright("[APP] ") + chalk.bold.whiteBright(`Listening on port : `) + chalk.bold.yellowBright(String(config.app.port)));
});

server.on("error", onError);