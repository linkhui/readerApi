'use strict';

// var url = require("url");

exports.listall = function (req, res) {
    console.log('call test');
    // var pathname = url.parse(req.url).pathname;
    // var querys = url.parse(req.url).query;
    // var city = req.query['city'];
    // console.log("Request for "  + " " + city + " received.");

    var reader = require('../models/readerModel');

    reader.readDB(res);

}


exports.write = function (req, res) {
    console.log('call test');
    // var pathname = url.parse(req.url).pathname;
    // var querys = url.parse(req.url).query;
    // var city = req.query['city'];
    // console.log("Request for "  + " " + city + " received.");
    console.log('POST /');
    console.dir(req.body);
    const body = req.body
    console.log(body.title)

    var addSqlParams = [body.title,body.audio_url,body.filename,body.content,body.origin,body.segments];
    var reader = require('../models/readerModel');


    reader.insertDB(res, addSqlParams);


    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks,You sent: ${body} to Express');

    // const body = req.body.Body
    // res.set('Content-Type', 'text/plain')
    // res.send(`You sent: ${body} to Express`)

}

exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};