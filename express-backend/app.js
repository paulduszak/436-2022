var express = require("express");

var app = express();

app.get(
  "/users/:userId",

  /// logging middleware - logs the request
  function (req, res, next) {
    console.log("Request URL:", req.originalUrl);
    //next();
  },

  /// authentication middleware - checks if the user is authenticated
  //   function (req, res, next) {

  //     //check req.headers.authorization
  //     //if not authenticated, return 401
  //     res.sendStatus(401);

  //     next();
  //   },

  function (req, res) {
    res.send(req.params.userId);
  }
);

module.exports = app;
