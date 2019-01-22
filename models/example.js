var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var PurchaseOrders = sequelize.define("purchase_orders", {
    projectName: DataTypes.STRING,
    requestorname: DataTypes.STRING,
    materialDescription: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    needByDate: DataTypes.DATEONLY,
    dateSubmitted: DataTypes.DATEONLY,
    dateOrdered: DataTypes.DATEONLY,
    confirmedDeliveryDate: DataTypes.DATEONLY,
    // requestNumber: DataTypes.INTEGER,
    buyer: DataTypes.STRING,
    status: DataTypes.STRING,
    deliveryStatus: DataTypes.STRING,
    deliveryDateDelta: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });
  return PurchaseOrders;
};
