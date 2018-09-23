//Enable express package functionality
var express = require("express");

var router = express.Router;

//Create route to access burger.js
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.create(
		["name", "devoured"],
		[req.body.name, req.body.devoured],
		function(result) {
			//Sending back ID of new burger
			res.json({ id: result.insertId });
		}
	);
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = "id= " + req.params.id;

	console.log("condition: ", condition);

	burger.update(
		{
			devoured: req.body.devoured
		},
		condition,
		function(result) {
			if (result.changedRows == 0) {
				//If no rows were changed, ID does not exist/404 message will be shown
				return res.status(404).end();
			} else {
				res.status(200).end();
			}
		}
	);
});

router.delete("/api/burgers/:id", function(req, res) {
	var condition = "id= " + req.params.id;

	burger.delete(condition, function(result) {
		if (result.affectedRows == 0) {
			//If no rows were changed, ID does not exist/404 message will be shown
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;