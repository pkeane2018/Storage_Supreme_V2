var db = require("../models");

var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/new", function(req, res) {
    res.render("newrequest");
  });

  app.get("/procurement", function(req, res) {

 

    db.purchase_orders.findAll({}).then(function() {
      console.log(res);
      res.render("procurement");
    });
  });

  app.get("/review", function(req, res) {
    db.purchase_orders.findAll({
      where: {
        projectName: req.params.projectName
      }
    }).then(function () {
      console.log(req);
      res.render("review");
    });

  });
  

  

  // app.get("/procurement/assigned", function (req, res) {
  //   // Info needs to be added here to display the databse

  //   res.render("procassigned");

  // });

  // app.get("/procurement/all", function (req, res) {
  //   // Info needs to be added here to display the databse

  //   db.purchase_orders.findAll().then(function (results) {

  //     res.render("procurementall", {
  //       orders: results
  //     });
  //   });
  // });



  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       // msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
