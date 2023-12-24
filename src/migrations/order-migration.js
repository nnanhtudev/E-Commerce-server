"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      cart_id: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      fullname: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "Pending",
        validate: {
          isIn: [["Pending", "Processing", "Shipped", "Delivered"]],
        },
      },
      timeorder: {
        type: Sequelize.RANGE(Sequelize.DATE),
      },
      delivered: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      payment: {
        type: Sequelize.STRING,
        defaultValue: "Bank",
        validate: {
          isIn: [["Bank", "Cash on delivery"]],
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
