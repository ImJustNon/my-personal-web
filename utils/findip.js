module.exports = {
    findip: (req) =>{
        let ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
        return ip;
    },
}