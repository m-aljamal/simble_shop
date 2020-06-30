const router = require("express").Router();
const { productValidator } = require("../validator/product");
const { runValidation } = require("../validator");
const productController = require("../controllers/product_controller");
const middleware = require("../utils/middleware");
// @route   POST  /api/products/new
// @desc    create new product
// @access  private
router.post(
  "/new",
  middleware.fileUpload.single("image"),
  productValidator,
  runValidation,
  productController.createNewProduct
);
// @route   GET  /api/products
// @desc    get all  products
// @access  public
router.get(
  "/",

  productController.getAllProducts
);
// @route   GET  /api/products/:id
// @desc    get one  product
// @access  public
router.get(
  "/:id",

  productController.getOneProduct
);

module.exports = router;
