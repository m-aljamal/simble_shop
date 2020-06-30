const Product = require("../models/Product");
const createNewProduct = async (req, res, next) => {
  const { type, images, name, price, sizes, colors,quantity } = req.body;

  const newProduct = new Product({
    type,
    name,
    price,
    images,
    sizes,
    colors,
    quantity,
  });

  try {
    await newProduct.save();

    res.json(newProduct);
  } catch (error) {
    console.log(error);
  }
};
const getAllProducts = async (req, res, next) => {
  try {
    const respond = await Product.find({});
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
