const express = require("express"),
  exampleRoute = require("./routes/exampleRoute"),
  bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

// For Request Body Parse
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
app.use(
  bodyParser.json({
    limit: "50mb",
    extended: true,
  })
);

// Router Middlewares
app.use(exampleRoute);

// Custom Error Middleware
app.use((err, req, res, next) => {
  res.status(400);
  res.json({
    message: err.message,
    code: err.code,
  });
});

process.env.PORT = process.env.PORT || 8080;
console.log("App Started: " + process.env.PORT);
app.listen(process.env.PORT);

module.exports = app;
