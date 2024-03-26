const path = require("path");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

const v1routerMapping = require("./v1/routerMapping");

const app = express();

app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.static(path.resolve(__dirname, "public")));

app.use("/api", v1routerMapping);

module.exports = app;
