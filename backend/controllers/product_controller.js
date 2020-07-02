const Product = require("../models/Product");
const createNewProduct = async (req, res, next) => {
  const { type, name, price, sizes, colors,quantity } = req.body;
  
console.log('file path:',req.file.path);

  const newProduct = new Product({
    type,
    name,
    price,
    images: req.file.path,
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
    let respond = await Product.find({});
    console.log('log res', respond[0].images[0]);
    
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
