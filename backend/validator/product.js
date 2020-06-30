const { check } = require("express-validator");

exports.productValidator = [
  check("type").notEmpty().withMessage("type is required"),
  // check("images").notEmpty().withMessage("images are required"),
  check("name").notEmpty().withMessage("name is required"),
  check("price").isNumeric().withMessage("price is required"),
  check("sizes").notEmpty().withMessage("sizes are required"),
  check("colors").notEmpty().withMessage("colors are required"),
  check("quantity").notEmpty().withMessage("quantity is required"),
];
