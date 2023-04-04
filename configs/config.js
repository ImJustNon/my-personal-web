require('dotenv').config()

module.exports = {
    database: {
        mongoDB: {
            URI: process.env.MONGO_URI || "",
            options: {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        },
        mysql: {
            host: process.env.MYSQL_HOST || "",                                     
            user: process.env.MYSQL_USER || "",     
            password: process.env.MYSQL_PASSWORD || "",                                     
            port: 3306,                                             
            database: process.env.MYSQL_DATABASE || "",            
            ssl: {
                rejectUnauthorized: MysqlSsl(process.env.MYSQL_SSL),
            }, 
        }
    },
    app: {
        address: "127.0.0.1",
        port: process.env.PORT || 8080,
        api: {
            secretKey: "nondeklnw",
        },
    },
    birthDate: "09/04/2006", //    MM/DD/YYYY format
}

function MysqlSsl(value){
    if(!value){
        return false;
    }
    if(typeof value === "string"){
        if(value.toLowerCase() === "true"){
            return true;
        }
        if(value.toLowerCase() === "false"){
            return false;
        }
    }
}