const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const config = require("./configs/config.js");
const chalk = require('chalk');
const logger = require('morgan');
const useragent = require('express-useragent');
const cors = require('cors');

const app = express();
const urlencoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

app.use(cors());
app.use(useragent.express());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(logger("common"));
app.use(express.static(path.join(__dirname,'./public')));
app.use(express.static(path.join(__dirname,'./node_modules')));
app.use(express.json({
    limit: '50mb',
}));
app.use(urlencoded);

fs.readdirSync("./routers").forEach(async files => {
    try {
        let router = require(`./routers/${files}`);
        app.use(router);
        console.log(chalk.bold.greenBright('[Router] ') + chalk.bold.whiteBright(`Loaded : `) + chalk.bold.greenBright(files));
    }
    catch (e){
        console.log(chalk.bold.greenBright('[Router] ') + chalk.bold.whiteBright(`Fail to Load : `) + chalk.bold.redBright(files + " ERROR: " + e));
    }
});


// catch 404 and forward to error handler
app.use((req, res, next) =>{
    next(createError(404));
});
// error handler
app.use((err, req, res, next) =>{
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {},
    });
});





// database setup old code
/*
fs.readdirSync("./database").forEach(async folders => {
    fs.readdirSync(`./database/${folders}`).forEach(async files => {
        require(`./database/${folders}/${files}`).connect();
        console.log(chalk.bold.yellowBright('[Database] ') + chalk.bold.whiteBright(`Loaded : `) + chalk.bold.greenBright(`${folders}/${files}`));
    });
}); 
*/

fs.readdir(path.join(__dirname, "/database"), (err, folders) =>{
    folders.forEach((folder) =>{
        fs.readdir(path.join(__dirname, `/database/${folder}`), (err, files) =>{
            const jsFile = files.filter(el => path.extname(el) === '.js');
            try{
                require(`./database/${folder}/${jsFile}`).connect();
                console.log(chalk.bold.yellowBright('[Database] ') + chalk.bold.whiteBright(`Loaded : `) + chalk.bold.greenBright(`${folder}/${jsFile}`));
            }
            catch(e){
                console.log(chalk.bold.yellowBright('[Database] ') + chalk.bold.whiteBright(`Cant load : `) + chalk.bold.redBright(`${folder}/${jsFile} ERROR: ${e}`));
            }
        });
    });
});



module.exports = app;