const express = require('express');
const router = express.Router();

const fs = require("fs");
const path = require("path");
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

const config = require("../configs/config.js");
const { findip } = require("../utils/findip.js");
const { connection } = require("../database/mysql/db.js");

let certficate = require("../configs/data/certificate.js");
let activity = require("../configs/data/activity.js");
let projects = require("../configs/data/projects.js");



// ================================================================== Visitor count ==================================================================
router.get("/api/visitor-count/:option", async(req, res) =>{
    const { option } = req.params ?? {};
    if(!option){ 
        return res.json({
            status: "FAIL",
            error: "no option specified",
        });
    }
    connection.execute('SELECT count from visitor_count WHERE id=?', ['6212'], async(err, results, fields) =>{
        if(err){
            return res.json({
                status: "FAIL",
                error: "Mysql error [1]",
            });
        }
        if(option === "check"){
            return res.json({
                status: "SUCCESS",
                error: null,
                data: {
                    count: await results[0].count, 
                }
            });
        }
        else if(option === "add"){
            let currentCount = await results[0].count;
            let addCount = parseInt(currentCount) + 1;
            connection.execute('UPDATE visitor_count SET count=? WHERE id=?', [String(addCount), '6212'], (err, results, fields) =>{
                if(err){
                    return res.json({
                        status: "FAIL",
                        error: "Mysql error [2]",
                    });
                }
                res.json({
                    status: "SUCCESS",
                    error: null,
                    data: {
                        count: addCount,
                    }
                });    
            });
        }
        else{
            return res.json({
                status: "FAIL",
                error: "this option not available",
            });
        }
    });
});

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

router.get("/api/DDOS/detector", async(req, res) =>{
    const clientIp = await findip(req);
    return res.send("<h1 style='font-size:350px;'>ขี้เกียจทำโว้ย</h1>  นี่ IP มึงอ่ะ : " + clientIp);
});


module.exports = router;