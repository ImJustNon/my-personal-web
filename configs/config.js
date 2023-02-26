const env = require('dotenv').config()


module.exports = {
    database: {
        mongoDB: {
            URI: "",
            options: {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        },
    },
    app: {
        address: "127.0.0.1",
        port: env.parsed.PORT || 8080,
    },
    birthDate: "09/04/2006", //    MM/DD/YYYY format
}