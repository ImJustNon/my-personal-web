const mysql = require("mysql2");
const chalk = require("chalk");

const config = require('../../configs/config.js');
const connection = mysql.createConnection(config.database.mySQL);



const connect = async() =>{
    connection.connect((err) =>{
        if (err) {
            console.log(chalk.bold.yellowBright("[Database] ") + chalk.bold.whiteBright(`mySQL : Cannot connect to database ERROR : `) + chalk.bold.redBright(err));
        } 
        else {
            console.log(chalk.bold.yellowBright("[Database] ") + chalk.bold.whiteBright(`mySQL : Connected`));
        }
    });
}

/**
 * @param { String } sql
 * @returns { result, error }
 */
const query = async({ sql }) =>{
    return new Promise(async(resolve, reject) =>{
        // no  sql
        if(typeof sql === "undefined"){
            throw new Error('Please specify SQL command');
        }


        // sql ok
        if(typeof sql === "string"){
            let all = {};
            let error = {};
            await connection.promise().query(sql)
            .catch(async e => error = await e)
            .then(async([rows, fields]) =>{
                all = Object.assign(rows = {rows: await rows}, fields = {fields: await fields});
                resolve({
                    result: all,
                    error: error,
                });
            });
        }
    });
}


exports.connection = connection;
exports.connect = connect;
exports.query = query;