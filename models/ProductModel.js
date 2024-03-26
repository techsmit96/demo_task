const { DataTypes, Sequelize } = require("sequelize");
const demo = require("../configs/db/demo");
const tables = require("../configs/db/tables");

const ProductModel = demo.define(
  "product_master",
  {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.STRING(100),
    },
    productName: {
      type: DataTypes.STRING(100),
    },
    productImageName: {
      type: DataTypes.STRING(100),
    },
    productImageURL: {
      type: DataTypes.STRING(100),
    },
    brandName: {
      type: DataTypes.STRING(100),
    },
    description: {
      type: DataTypes.STRING(100),
    },
    itemCode: {
      type: DataTypes.STRING(100),
    },
    itemType: {
      type: DataTypes.STRING(100),
    },
    currency: {
      type: DataTypes.STRING(100),
    },
    currencyCode: {
      type: DataTypes.STRING(100),
    },
    saleAmount: {
      type: DataTypes.STRING(100),
    },
    brochureFileName: {
      type: DataTypes.STRING(100),
    },
    brochureFileURL: {
      type: DataTypes.STRING(100),
    },
    vendors: {
      type: DataTypes.STRING(100),
    },
    status: {
      type: DataTypes.STRING(100),
    },
    createdBy: {
      type: DataTypes.STRING(100),
    },
    created_at: {
      type: DataTypes.INTEGER(10),
      defaultValue: Sequelize.literal("UNIX_TIMESTAMP()"),
    },
    updated_at: {
      type: DataTypes.INTEGER(10),
      defaultValue: Sequelize.literal("UNIX_TIMESTAMP()"),
      onUpdate: Sequelize.literal("UNIX_TIMESTAMP()"),
    },
    categoryId: {
      type: DataTypes.INTEGER(10),
    },
    uomId: {
      type: DataTypes.INTEGER(10),
    },
    shippingMethodId: {
      type: DataTypes.INTEGER(10),
    },
    shippingTermsId: {
      type: DataTypes.INTEGER(10),
    },
    paymentTermsId: {
      type: DataTypes.INTEGER(10),
    },
    categoryName: {
      type: DataTypes.STRING(100),
    },
    subCategoryName: {
      type: DataTypes.STRING(100),
    },
    uomCode: {
      type: DataTypes.STRING(100),
    },
    uomDescription: {
      type: DataTypes.STRING(100),
    },
    organisationName: {
      type: DataTypes.STRING(100),
    },
    organisationId: {
      type: DataTypes.INTEGER(10),
    },
    vendorInfo: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: tables.PRODUCT_MASTER,
  }
);

module.exports = ProductModel;
