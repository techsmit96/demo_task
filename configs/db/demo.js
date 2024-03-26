const { Sequelize } = require("sequelize");

const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD, DB_DIALECT } = process.env;

const demo = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: 3307,
  dialect: DB_DIALECT,
  logging: false,
  logQueryParameters: false,
  timezone: "Asia/Culcutta",
  define: {
    timestamps: false,
  },
  dialectOptions: {
    timezone: "+05:30",
  },
  connectTimeout: 60000,
});

module.exports = demo;