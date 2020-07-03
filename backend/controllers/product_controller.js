const Product = require("../models/Product");
const createNewProduct = async (req, res, next) => {
  try {
  const { type, name, price, sizes, colors, quantity } = req.body;

  let pro = {};
  if (type) pro.type = type;
  if (name) pro.name = name;
  if (sizes) pro.sizes = sizes;
  if (colors) pro.colors = colors;
  if (quantity) pro.quantity = quantity;
  if (price) pro.price = price;
  if (req.file) pro.images = req.file.path;

  const newProduct = new Product(pro);

  if (req.file) {
    console.log("file path:", req.file.path);
  }

  
    await newProduct.save();

    res.json(newProduct);
  } catch (error) {
    console.log(error);
  }
};
const getAllProducts = async (req, res, next) => {
  try {
    let respond = await Product.find({});
    console.log("log res", respond[0].images[0]);

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
