var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var appRouter = require("./routers/appRouter.js");
var app = express();
app.set("env", "development");
app.set("port", 8080);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("ip", "localhost");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", appRouter.home);



app.listen(app.get("port"), function(){
	console.log("Server Started on localhost:8080");
});
