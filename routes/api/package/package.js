var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	console.log("wregfw")
	var email = req.params.email;
	if(email){
		return res.apiResponse({package:"trial"});
	}
	return res.apiResponse({success:false});
};
