const { Sequelize, Op } = require("sequelize");
const demo = require("../../configs/db/demo");
const ProductModel = require("../../models/ProductModel");

exports.addProduct = async (req, res, next) => {
  console.log("req.bosy", req.body);

  let data = await ProductModel.create(req.body);

  return res.status(200).json({
    message: "data created",
    data,
  });
};
exports.getProduct = async (req, res, next) => {
  console.log("req.query.", req.query);
  let limit = 10;
  let offset = 1;
  let productFilters = {};
  if (req.query.pageSize && req.query.currentPage) {
    limit = parseInt(req.query.pageSize, 10);
    offset = (parseInt(req.query.currentPage, 10) - 1) * limit;
  }
  let orderDirection = "desc";
  if (req.query.orderDir) {
    orderDirection = req.query.orderDir;
  }
  let orderBY = "created_at";
  if (req.query.orderBy) {
    orderBY = req.query.orderBy;
  }

  if (req.query.searchBy) {
    let fieldsArray;
    if (req.query.searchFields) {
      fieldsArray = req.query.searchFields;
    }
  }
  let { rows, count } = await ProductModel.findAndCountAll({
    where: productFilters,
    limit,
    offset,
    order: [[`${orderBY}`, `${orderDirection}`]],
  });

  res.status(200).json({
    currentPage: req.query.currentPage,
    pageSize: req.query.pageSize,
    count: count,
    totalPages: Math.ceil(count / limit),
    data: rows,
  });
};
