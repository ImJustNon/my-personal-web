const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");
const { certificate } = require("../configs/data/certificate.js");

router.get('/certificate', urlEncoded, async(req, res) =>{
    res.render("index", {
        title: "CERTIFICATE",
        path: "/certificate",
        platform: req.useragent,
        error: null,
        data: {
            certificate: certificate,
        },
    });
});


module.exports = router;