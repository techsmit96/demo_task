const express = require("express");
const router = express.Router();

let userRouter = require("./routes/User.routes")
let productRouter = require("./routes/Product.routes")

router.use("/users", userRouter);
router.use("/products", productRouter);

module.exports = router;