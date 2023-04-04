const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");
let certficate = require("../configs/data/certificate.js");
let activity = require("../configs/data/activity.js");
let projects = require("../configs/data/projects.js");



// ================================================================== Certificate ==================================================================
router.get('/api/get/certificate', urlEncoded, async(req, res) =>{
    const { key, filter } = req.query ?? {};
    if(!key){
        return res.json({
            status: "FAIL",
            error: "?key not found",
        });
    }

    if(key !== config.app.api.secretKey){
        return res.json({
            status: "FAIL",
            error: "key invalid",
        });
    }

    if(!filter){
        return res.json({
            status: "SUCCESS",
            error: null,
            data: certficate,
        });
    }
    
    if(filter.toLowerCase() === "middle_school"){
        res.json({
            status: "SUCCESS",
            error: null,
            data: certficate.middle_School,
        });
    }
    else if(filter.toLowerCase() === "voc_cert_1"){
        res.json({
            status: "SUCCESS",
            error: null,
            data: certficate.voc_cert,
        });
    }
    else if(filter.toLowerCase() === "voc_cert_2"){
        res.json({
            status: "SUCCESS",
            error: null,
            data: certficate.voc_cert_2,
        });
    }
});

// ================================================================== Activity ==================================================================
router.get('/api/get/activity', urlEncoded, async(req, res) =>{
    const { key, filter } = req.query ?? {};
    if(!key){
        return res.json({
            status: "FAIL",
            error: "?key not found",
        });
    }

    if(key !== config.app.api.secretKey){
        return res.json({
            status: "FAIL",
            error: "key invalid",
        });
    }

    if(!filter){
        return res.json({
            status: "SUCCESS",
            error: null,
            data: activity,
        });
    }

    if(filter.toLowerCase() === "voc_cert_1"){
        res.json({
            status: "SUCCESS",
            error: null,
            data: activity.voc_cert,
        });
    }
    else if(filter.toLowerCase() === "voc_cert_2"){
        res.json({
            status: "SUCCESS",
            error: null,
            data: activity.voc_cert_2,
        });
    }
});

// ================================================================== Project ==================================================================
router.get('/api/get/projects', urlEncoded, async(req, res) =>{
    const { key, filter } = req.query ?? {};
    if(!key){
        return res.json({
            status: "FAIL",
            error: "?key not found",
        });
    }

    if(key !== config.app.api.secretKey){
        return res.json({
            status: "FAIL",
            error: "key invalid",
        });
    }

    if(!filter){
        return res.json({
            status: "SUCCESS",
            error: null,
            data: projects,
        });
    }

    if(filter.toLowerCase() === "m3"){
        res.json({
            status: "SUCCESS",
            error: null,
            data: projects.m3,
        });
    }
    else if(filter.toLowerCase() === "voc_cert_1"){
        res.json({
            status: "SUCCESS",
            error: null,
            data: projects.voc_cert,
        });
    }
    else if(filter.toLowerCase() === "voc_cert_2"){
        res.json({
            status: "SUCCESS",
            error: null,
            data: projects.voc_cert_2,
        });
    }
    else if(filter.toLowerCase() === "tools"){
        res.json({
            status: "SUCCESS",
            error: null,
            data: projects.tools,
        });
    }
});


module.exports = router;