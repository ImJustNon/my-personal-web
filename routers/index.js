const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

router.get('/', urlEncoded, async(req, res) =>{
    return res.redirect("/home");
});


module.exports = router;