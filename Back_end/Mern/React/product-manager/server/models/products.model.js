const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        description: String
    },
    {timestamps: true}
);

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;