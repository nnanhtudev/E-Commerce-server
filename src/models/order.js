"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: user_id });
      Order.belongsTo(models.Cart, { foreignKey: cart_id });
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      cart_id: DataTypes.ARRAY(DataTypes.INTEGER),
      fullname: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      total: DataTypes.INTEGER,
      status: DataTypes.STRING,
      timeorder: DataTypes.RANGE(DataTypes.DATE),
      delivered: DataTypes.BOOLEAN,
      payment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
