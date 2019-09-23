const express = require("express");


const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const hbs = require("express-handlebars");

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


