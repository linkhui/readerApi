'use strict';

exports.readDB = function (res) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'Mysql_781101',
        database : 'reader'
    });

    connection.connect();

    connection.query('SELECT * from audio', function(err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
            res.json(rows);
        }
        else {
            console.log('Error while performing Query.');
            res.json({
                "success": false,
                "errorMsg": "Error while performing Query.",
                "errorCode": "400",
                "fields": {}
            });
        }
    });

    connection.end();
};

exports.insertDB = function (res,addSqlParams) {
    var mysql  = require('mysql');

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'Mysql_781101',
        database : 'reader'
    });

    connection.connect();

    var  addSql = 'INSERT INTO audio(title,audio_url,filename,content,origin,segments) VALUES(?,?,?,?,?,?)';
    // var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
//增
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:',result);
        console.log('-----------------------------------------------------------------\n\n');
    });

    connection.end();
}