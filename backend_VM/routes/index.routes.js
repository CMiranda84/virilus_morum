const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/users", require("./User.routes.js"))
router.use("/products", require("./Products.routes.js"))


module.exports = router;
