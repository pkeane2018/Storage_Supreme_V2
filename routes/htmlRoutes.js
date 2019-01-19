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

    // Info needs to be added here to display the database
    res.render("procurement");
  });

  app.get("/procurement/unassigned", function(req, res) {
    // Info needs to be added here to display the database
    res.render("procunassigned");
  });

  app.get("/procurement/assigned", function(req, res) {
    // Info needs to be added here to display the databse

      res.render("procassigned");

    });

  app.get("/procurement/all", function(req, res) {
    // Info needs to be added here to display the databse

    db.purchase_orders.findAll().then(function(results){
    
    res.render("procurementall", {
      orders: results

   

    });
  });

  app.get("/review", function(req, res) {
    db.PurchaseOrders.findAll({}).then(function() {
      console.log(res);
      res.render("review");
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
