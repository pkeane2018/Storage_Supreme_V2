var db = require("../models");

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
    res.render("procurementall");
  });
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       // msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
