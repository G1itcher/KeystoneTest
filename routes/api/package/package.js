var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var email = req.query.email;
	if(email){
		var decodedEmail = decodeURI(email);
		var UserDb = keystone.list("User").model;
		UserDb.findOne()
			.where("email", email)
			.exec(function(err, user){
				if(!err && user)
				{
					return res.apiResponse({package:"trial"});
				}
				else{
					return res.apiResponse({package:"none"});
				}
			})
		
	}
	else{
		return res.apiResponse({package:"none"});
	}
};
