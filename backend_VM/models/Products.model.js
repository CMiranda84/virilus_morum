const { Schema, model } = require("mongoose");

const ProductsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    title: String,
    image: String,
    description: String,
    price: Number,
    rating: Number,
    category: String,
    brand: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Products = model("Product", ProductsSchema);

module.exports = Products;
