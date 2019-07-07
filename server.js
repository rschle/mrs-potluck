var express = require("express");

const PORT = process.env.PORT || 2020;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

app.use(routes);

app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});
