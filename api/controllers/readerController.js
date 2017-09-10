'use strict';

// var url = require("url");

exports.listall = function (req, res) {
    console.log('call test');
    // var pathname = url.parse(req.url).pathname;
    // var querys = url.parse(req.url).query;
    var city = req.query['city'];
    console.log("Request for "  + " " + city + " received.");

    res.json({
    "success": true,
        "errorMsg": "成功",
        "errorCode": "200",
        "fields": {
        "城市": city,
            "最低温度": "36℃",
            "最高温度": "42℃",
            "天气": "多云"
    }
});
    
}

exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};