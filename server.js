const express = require("express");
const path = require("path");
const morgan = require("morgan");
const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 7070;

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/data', express.static(path.join(__dirname, "./app/data")));
app.use(express.json());

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {console.log("Listening at http://localhost:" + PORT)});