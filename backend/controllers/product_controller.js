const Product = require("../models/Product");
const createNewProduct = async (req, res, next) => {
  try {
    const { type, name, price, sizes, colors, quantity } = req.body;

    console.log("file path:", req.files);
    // console.log("image:", req.files.image);
    // console.log("file path onae:", req.file);

    const newProduct = new Product({
      type,
      name,
      price,
      images: req.files.images,
      sizes,
      colors,
      quantity,
      image: req.files.image[0].path,
    });
    console.log("data to save", newProduct);

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
module.exports = {
  createNewProduct,
  getAllProducts,
  getOneProduct,
};
