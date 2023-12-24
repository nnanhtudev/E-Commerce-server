"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //1 user co nhieu group
      User.belongsTo(models.Group, { foreignKey: "group_id" });
      User.hasMany(models.Review);
      User.hasMany(models.Order);
      User.hasOne(models.Cart);
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      username: DataTypes.STRING,
      fullname: DataTypes.STRING,
      address: DataTypes.STRING,
      sex: DataTypes.STRING,
      group_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
