var mysql = require('mysql');


var source ={
	localhost:{
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	},
	jaws:{
		port:3306,
		host: 'izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'taze8k0rls865mh8',
		password: "qlkzicj5mnuv3kqm",
		database: "lilnti1pijtvhddo"
	}
};

var connection = mysql.createConnection(source.jaws);

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;

	}

	console.log('connected as id ' + connection.threadId);
});


module.exports = connection;