const path = require("path");
const sqlite3 = require('better-sqlite3');
const db = sqlite3(path.join(__dirname + '/db.sqlite'));
const chalk = require('chalk');

function connect(){
    console.log(chalk.bold.yellowBright("[Database] ") + chalk.bold.whiteBright(`SQLite : Loaded`));
}

exports.db = db;
exports.connect = connect;