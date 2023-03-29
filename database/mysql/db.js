const mysql = require("mysql2");
const config = require("../../configs/config.js");
const connection = mysql.createConnection(config.database.mysql);
const chalk = require("chalk");

const connect = async() =>{
    connection.connect((err) =>{
        if (err) {
            console.log(chalk.bold.yellowBright("[Database] ") + chalk.bold.whiteBright(`MySQL : Cannot connect to database ERROR : `) + chalk.bold.redBright(err));
        } 
        else {
            console.log(chalk.bold.yellowBright("[Database] ") + chalk.bold.whiteBright(`MySQL : Connected`));
        }
    });
}

exports.connection = connection;
exports.connect = connect;