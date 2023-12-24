"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: "category_id" });
      Product.belongsTo(models.Discount, { foreignKey: "discount_code_Id" });
      Product.hasMany(models.Review);
      Product.hasOne(models.Inventory);
      Product.hasOne(models.Cart);
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      photos: DataTypes.ARRAY(DataTypes.STRING),
      price: DataTypes.INTEGER,
      discount_code_Id: DataTypes.ARRAY(DataTypes.INTEGER),
      category_id: DataTypes.INTEGER,
      color: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
