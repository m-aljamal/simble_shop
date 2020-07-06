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

  middleware.fileUpload.fields([
    { name: "images", maxCount: 5000 },
    { name: "image", maxCount: 300 },
  ]),
  // middleware.fileUpload.array("images"),
  //   productValidator,
  //   runValidation,
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
// @route   GET  /api/products/collections/:id
// @desc    get products by type
// @access  public
router.get(
  "/collections/:type",

  productController.getProductsByType
);

module.exports = router;
