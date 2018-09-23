 var connection = require("./connection.js");

var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	update: function(tableInput, condition, cb) {
		var queryString = "Update " + tableInput + " SET devoured=true WHERE id=" + condition + ";";

		connection.query(queryString, function(err, res) {
			if(err) {
				throw err;
			}
			cb(res);
		})
	}


};

module.exports = orm;