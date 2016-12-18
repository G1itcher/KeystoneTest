var keystone = require("keystone");
var JL = require('jsnlog').JL;
var jsnlog_nodejs = require('jsnlog-nodejs').jsnlog_nodejs;


exports.post = function(req, res){
    console.log(req.body);
    jsnlog_nodejs(JL, req.body);
    var newLog = keystone.list("LogEntry").model({
			text:req.body.lg[0].m,
			timestamp:Date.now()
		});
		newLog.save(function(e){
			console.log(e);
		});
    res.apiResponse("");
}