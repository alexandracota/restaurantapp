// Dependencies
// =============================================================
var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var tables = [
{
  name: "Alex",
  phoneNumber: "333",
  email: "ererer",
  id: 1
},
{
  name: "Joaquim",
  phoneNumber: "22",
  email: "asdas",
  id: 2
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("log in page");
});

// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "add.html"));
// });

// // Get all characters
app.get("/api/tables", function(req, res) {
  res.json(tables);
  console.log(tables);
});

// Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
