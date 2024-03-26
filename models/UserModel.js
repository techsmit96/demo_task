const { DataTypes, Sequelize } = require("sequelize");
const demo = require("../configs/db/demo");
const tables = require("../configs/db/tables");

const UserModel = demo.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(100),
    },
    name: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: tables.USER,
  }
);

module.exports = UserModel;