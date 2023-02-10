const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");
const { middle_School, voc_cert } = require("../configs/data/certificate.js");

router.get('/certificate', urlEncoded, async(req, res) =>{
    res.render("index", {
        title: "CERTIFICATE",
        path: "/certificate",
        platform: req.useragent,
        error: null,
        data: {
            middle_School: middle_School,
            voc_cert: voc_cert,
        },
    });
});


module.exports = router;