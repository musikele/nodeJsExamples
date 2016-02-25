'use strict';
//server.js

// BASE SETUP
// =============================================================================

// call the packages we need
let express = require('express');        // call express
let UserService = require('./UserService'); // user service 
let app = express();                 // define our app using express
let bodyParser = require('body-parser'); // express plugin for POST data

let port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router
	
let userService = new UserService();

router.get('/', function (req, res) {
	console.log('called GET / ');
	userService.fetchAllUsers((err, users) => {
		res.json(users);
	});
});

router.post('/', function (req, res) {
	console.log('called POST / ');
	let user = req.body; 
	userService.insertUser(user, 
		() => res.json({message: 'user ' + user.name + ' id ' + user.id +' created'}));
});

// REGISTER OUR ROUTES -------------------------------
app.use('/api/', bodyParser.json());
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);





