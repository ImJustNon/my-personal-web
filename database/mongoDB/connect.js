const chalk = require("chalk");
const mongoose = require("mongoose");
const config = require("../../configs/config.js");

mongoose.set('strictQuery', false);
const connect = async() =>{
    try {
        await mongoose.connect(config.database.mongoDB.URI, config.database.mongoDB.options).then(() =>{
            console.log(chalk.bold.yellowBright("[Database] ") + chalk.bold.whiteBright(`MongoDB : Connected`));
        }, (err) =>{
            console.log(chalk.bold.yellowBright("[Database] ") + chalk.bold.whiteBright(`MongoDB : Cannot connect to database ERROR : `) + chalk.bold.redBright(err));
        });
    } catch(err){
        console.log(chalk.bold.yellowBright("[Database] ") + chalk.bold.whiteBright(`MongoDB : Cannot connect to database ERROR : `) + chalk.bold.redBright(err));
    }
}

exports.connect = connect;