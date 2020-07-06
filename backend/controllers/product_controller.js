const Product = require("../models/Product");
const createNewProduct = async (req, res, next) => {
  try {
    const {
      type,
      name,
      price,
      sizes,
      colors,
      quantity,
      discription,
    } = req.body;

    const sizesArray = sizes.split(",").map((size) => size.trim());
    const colorsArray = colors.split(",").map((color) => color.trim());
    const newProduct = new Product({
      type,
      name,
      price,
      images: req.files.images,
      sizes: sizesArray,
      colors: colorsArray,
      quantity,
      image: req.files.image[0].path,
      discription,
    });

    await newProduct.save();

    res.json(newProduct);
  } catch (error) {
    console.log(error);
  }
};
const getAllProducts = async (req, res, next) => {
  try {
    let respond = await Product.find({});
    console.log("log res", respond[0].images);

    res.json(respond);
  } catch (error) {
    console.log(error);
  }
};
const getOneProduct = async (req, res, next) => {
  try {
    const response = await Product.findById(req.params.id);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};
const getProductsByType = async (req, res, next) => {
  try {
    const response = await Product.find({ type: req.params.type });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createNewProduct,
  getProductsByType,
  getAllProducts,
  getOneProduct,
};
