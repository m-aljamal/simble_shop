const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  type: {
    type: String,
    require: true,
  },
  image: [{ type: String }],
  images: [{ type: Object }],
  name: {
    type: String,
    requier: true,
  },
  price: {
    type: Number,
    requier: true,
  },
  quantity: {
    type: Number,
    requier: true,
  },
  sizes: [{ type: String, requier: true }],
  colors: [{ type: String, requier: true }],
});

productSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Product", productSchema);
