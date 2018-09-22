require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

//Serve static content for the app from the "public" directory
app.use(express.static("public/"));

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

//Parse application/json
app.use(bodyParser.json());

//Set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Give server access to routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Start our server so that it can begin listening to client requests
app.listen(PORT, function(){
	//Log (server-side) when the server has started
	console.log("Server listening on: http://localhost:" + PORT);
})

