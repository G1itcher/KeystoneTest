var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.user = req.body || {};

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	console.log("frg");
	view.on("post", {action: "newUser"}, function(next){
		console.log(locals.user);
		console.log(locals.user.name);
		var UserModel = keystone.list("User");
		var newUser = new UserModel.model({
			name:{first:"test", last:"man"},
			email:locals.user.username,
			password:locals.user.password,
			company:locals.user.company
		});
		newUser.save(function(e){
			console.log(e);
			next()
		});
	})

	// Render the view
	view.render('index');
};
