var path = require("path");
var express = require("express");

var app = express();

app.use(express.static(path.join(__dirname, "build")));
app.set("port", process.env.PORT || 8080);
app.get("/robots.txt", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "robots.txt"));
});
app.get("/sitemap.xml", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "sitemap.xml"));
});
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "build", "index.html"));
});

var server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});
