var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/requests", function(req, res) {
    db.purchase_orders.create({
      projectName: req.body.projectName,
      requestorname : req.body.requestorname,
      materialDescription: req.body.materialDesc,
      quantity: req.body.quantity,
      buyer: req.body.buyer,
      // buyer: req.body.buyer
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.put("/api/update", function(req, res) {
    db.purchase_orders.update(
      {
      dateSubmitted: req.body.dateSubmitted, 
      buyer: req.body.buyer,
      needByDate: req.body.needByDate,
      materialDescription: req.body.material,
      quantity: req.body.quantity,
      status: req.body.status,
      confirmedDeliveryDate: req.body.confirmedDeliveryDate,
      deliveryStatus: req.body.deliveryStatus
    }, 
      {
      where: {
        id : req.body.id}}
    ).then(function(result){
      res.json(result);
    })
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
